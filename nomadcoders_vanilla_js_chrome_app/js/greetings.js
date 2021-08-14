const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
	event.preventDefault();
	const userName = loginInput.value;
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `Hello ${userName}`;
	// greeting.innerText = 'Hello ' + userName;
	// greeting.innerHTML = 'Hello ' + userName;
	localStorage.setItem(USERNAME_KEY, userName);
	console.log(userName);
}

if (savedUserName === null || savedUserName === '') {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `Hello ${savedUserName}`;
}
