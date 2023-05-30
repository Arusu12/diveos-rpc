# DiveOS RPC

DiveOS RPC is an Electron application that enables a rich presence for Discord. It allows you to customize and display your application's details, state, and images on your Discord profile.

## Features

- Displays application details and state on Discord
- Customizable large and small images with text
- Supports buttons with customizable labels and URLs (Only 1 for now)

## Installation

To use DiveOS RPC, you can download the latest release from the [GitHub repository](https://github.com/Arusu12/diveos-rpc).

1. Go to the [Releases](https://github.com/Arusu12/diveos-rpc/releases) page.
2. Download the latest version of DiveOS RPC for your operating system (e.g., Windows).
3. Extract the downloaded archive to a desired location on your computer.

## Usage

1. Open the extracted folder and locate the executable file (`DiveOS.exe` for Windows).
2. Double-click the executable file to launch DiveOS RPC and install it.
3. The DiveOS RPC icon will appear in the system tray.
4. Right-click on the DiveOS RPC icon to access the context menu.
5. The context menu allows you to interact with DiveOS RPC:
   - Check the status of the extension connection (connected or disconnected).
   - Restart the RPC (Rich Presence) to apply any changes.
   - Exit the application.

## Configuration

To configure the presence details for your application, you need to make HTTP requests to the DiveOS RPC server.

The DiveOS RPC server listens on port 3776 by default. The chromium extension provided along with the executable can be used to send POST requests and set the presence. The crx file can be directly installed in opera. To use it in Chrome, turn on developer mode and drop the extension folder of the repository.
