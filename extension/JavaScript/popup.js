const form = document.querySelector('form');
const detailsInput = document.querySelector('#details');
const stateInput = document.querySelector('#state');
const largeKeyInput = document.querySelector('#largeKey');
const largeNameInput = document.querySelector('#largeName');
const smallKeyInput = document.querySelector('#smallKey');
const smallNameInput = document.querySelector('#smallName');
const link1NameInput = document.querySelector('#link1Name');
const link1Input = document.querySelector('#link1');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const details = detailsInput.value;
  const state = stateInput.value;
  const smallKey = smallKeyInput.value;
  const smallName = smallNameInput.value;
  const largeKey = largeKeyInput.value;
  const largeName = largeNameInput.value;
  const link1Name = link1NameInput.value;
  const link1 = link1Input.value;

  const alertElement = document.getElementById('alert');
  const divElement = document.createElement('div');
  divElement.className = 'alert';

  fetch('http://localhost:3776/presence', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ details, state, largeKey, largeName, smallKey, smallName, link1Name, link1 }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      divElement.innerText = data.success;
      alertElement.appendChild(divElement);

      // Store form values in localStorage
      localStorage.setItem('details', details);
      localStorage.setItem('state', state);
      localStorage.setItem('largeKey', largeKey);
      localStorage.setItem('largeName', largeName);
      localStorage.setItem('smallKey', smallKey);
      localStorage.setItem('smallName', smallName);
      localStorage.setItem('link1Name', link1Name);
      localStorage.setItem('link1', link1);
    })
    .catch((error) => {
      divElement.innerText = error;
      alertElement.appendChild(divElement);
    });
});