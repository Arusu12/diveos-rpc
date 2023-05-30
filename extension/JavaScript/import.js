const importInput = document.querySelector('#importInput');
const importButton = document.querySelector('#import');

importButton.addEventListener('click', function (event) {event.preventDefault(), importInput.click()})

importInput.addEventListener('change', function () {
  const file = importInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const importedData = JSON.parse(event.target.result);

    // Set the form values from the imported data
    detailsInput.value = importedData.details;
    stateInput.value = importedData.state;
    largeKeyInput.value = importedData.largeKey;
    largeNameInput.value = importedData.largeName;
    smallKeyInput.value = importedData.smallKey;
    smallNameInput.value = importedData.smallName;
    link1NameInput.value = importedData.link1Name;
    link1Input.value = importedData.link1;

    // Store the imported form values in localStorage
    localStorage.setItem('details', importedData.details);
    localStorage.setItem('state', importedData.state);
    localStorage.setItem('largeKey', importedData.largeKey);
    localStorage.setItem('largeName', importedData.largeName);
    localStorage.setItem('smallKey', importedData.smallKey);
    localStorage.setItem('smallName', importedData.smallName);
    localStorage.setItem('link1Name', importedData.link1Name);
    localStorage.setItem('link1', importedData.link1);
  };
  reader.readAsText(file);
});