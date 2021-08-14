const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'toDos';
let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
	// console.log(event);
	// console.dir(event.target); //target 은 클린된 HTML element 이다
	// console.dir(event.target.parentElement);
	// console.log(event.target.parentElement.innerText);

	const li = event.target.parentElement;
	toDos = toDos.filter((item) => {
		return item.id !== parseInt(li.id);
	});
	saveToDos();
	li.remove();
}

function paintTodo(newTodoObj) {
	// console.log('i willl paint', newTodo);
	const li = document.createElement('li');
	li.id = newTodoObj.id;
	const span = document.createElement('span');
	span.innerText = newTodoObj.text;
	const button = document.createElement('button');
	button.innerText = '❌';
	button.addEventListener('click', deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
	// console.log(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	console.log('1', toDos);
	const newTodo = toDoInput.value;
	toDoInput.value = '';
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};
	toDos.push(newTodoObj);

	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');
	li.id = newTodoObj.id;
	span.innerText = newTodoObj.text;
	button.innerText = '❌';
	button.addEventListener('click', deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
	// paintTodo(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// function sayHello(item) {
// 	console.log('hello', item);
// }

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	// console.log(parsedToDos);
	// parsedToDos.forEach(sayHello);
	// parsedToDos.forEach((item) => console.log('hello', item));
	parsedToDos.forEach(paintTodo);
}
