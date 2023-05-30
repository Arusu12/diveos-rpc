const exportButton = document.querySelector('#export');

exportButton.addEventListener('click', function (event) {
    event.preventDefault()
    // Create a data object with the form values
    const data = {
      details: detailsInput.value,
      state: stateInput.value,
      largeKey: largeKeyInput.value,
      largeName: largeNameInput.value,
      smallKey: smallKeyInput.value,
      smallName: smallNameInput.value,
      link1Name: link1NameInput.value,
      link1: link1Input.value,
    };
  
    // Convert the data object to JSON string
    const jsonData = JSON.stringify(data);
  
    // Create a data URI for the exported JSON data
    const dataURI = 'data:application/diveos;charset=utf-8,' + encodeURIComponent(jsonData);
  
    // Create a temporary link element
    const linkElement = document.createElement('a');
    linkElement.href = dataURI;
    linkElement.download = 'presence.diveos';
    linkElement.click();
  });