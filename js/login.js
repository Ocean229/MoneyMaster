const container = document.querySelector('#container');
const signUpButton = document.querySelector('#signUp');
const logInButton = document.querySelector('#logIn');

signUpButton.addEventListener('click', () =>
  container.classList.add('right-panel-active')
);

logInButton.addEventListener('click', () =>
  container.classList.remove('right-panel-active')
);
