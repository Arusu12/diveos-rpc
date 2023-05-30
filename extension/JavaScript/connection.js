setInterval(() => {
    fetch('http://localhost:3776/extension-connection', {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Extension connection status updated:', data.success);
      })
      .catch(error => {
        console.error('Error updating extension connection status:', error);
      });
  }, 1000);  