const { app, Tray, Menu } = require('electron');
const RPC = require('discord-rpc');
const express = require('express');
const cors = require('cors');
const path = require('path');

let tray = null;
let extensionConnection = false;
const rpc = new RPC.Client({ transport: 'ipc' });

const expressApp = express();
const port = 3776; // Replace with your desired port number

expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.json());
expressApp.use(cors());

expressApp.post('/extension-connection', (req, res) => {
  extensionConnection = true;

  setTimeout(() => {
    extensionConnection = false;
    updateContextMenu();
  }, 2000);

  updateContextMenu();

  res.json({ success: true });
});

expressApp.post('/presence', (req, res) => {
  const { details, state, largeKey, largeName, smallKey, smallName, link1Name, link1 } = req.body;

  rpc.setActivity({
    details: details,
    state: state,
    startTimestamp: new Date(),
    largeImageKey: largeKey,
    largeImageText: largeName,
    smallImageKey: smallKey,
    smallImageText: smallName,
    buttons: [
      { label: link1Name, url: link1 }
    ],
  });

  res.json({ success: "Successfully updated the Presence", details: details, state: state });
  console.log('Details - "' + details + '" State - "' + state + '"')
});

function updateContextMenu() {
  const contextMenuTemplate = [
    {
      label: 'DiveOS RPC v.1.0',
      enabled: false
    },
    {
      label: extensionConnection ? 'Extension: Connected' : 'Extension: Disconnected',
      enabled: false
    },
    {
      type: 'separator'
    },
    {
      label: 'Restart RPC',
      click: () => {
        rpc.destroy();
        rpc.login({ clientId: '1112641589865631854' });
      }
    },
    {
      label: 'Exit',
      click: () => {
        app.exit();
      }
    }
  ];

  const newContextMenu = Menu.buildFromTemplate(contextMenuTemplate);
  tray.setContextMenu(newContextMenu);
}

app.whenReady().then(() => {
  tray = new Tray(path.join(__dirname, 'icons/icon.png'));

  rpc.on('ready', () => {
    console.log('Rich Presence is active.');
  });

  rpc.login({ clientId: '1112641589865631854' });

  tray.on('right-click', () => {
    tray.popUpContextMenu(contextMenu);
  });

  // Clean up resources and exit the app when the tray is closed
  tray.on('destroy', () => {
    app.exit();
  });

  // Start the Express server
  expressApp.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  // Update initial context menu
  updateContextMenu();
});

app.on('window-all-closed', () => {
  // Don't quit the app when all windows are closed
  // (This prevents the default behavior of Electron)
});
