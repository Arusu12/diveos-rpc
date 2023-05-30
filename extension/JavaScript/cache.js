// Load stored form values from localStorage
detailsInput.value = localStorage.getItem('details');
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//   var title = tabs[0].title;
//   detailsInput.value = title;
// });
stateInput.value = localStorage.getItem('state');
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//   var url = tabs[0].audible;
//   if(url){stateInput.value = 'Watching...'}else{stateInput.value = 'Paused'}
// });
largeKeyInput.value = localStorage.getItem('largeKey');
largeNameInput.value = localStorage.getItem('largeName');
smallKeyInput.value = localStorage.getItem('smallKey');
smallNameInput.value = localStorage.getItem('smallName');
link1NameInput.value = localStorage.getItem('link1Name');
link1Input.value = localStorage.getItem('link1');
detailsInput.value = localStorage.getItem('details');
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//   var url = tabs[0].url;
//   link1Input.value = url;
// });