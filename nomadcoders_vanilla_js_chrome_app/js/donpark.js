const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('Input');
const todoList = document.querySelector('#todo-list');
let todos = [];

function saveTodo() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function delTodo(event) {
	const li = event.target.parentElement;
	li.remove();
	todos = todos.filter((todo) => {
		return todo.id !== parseInt(li.id);
	});
	saveTodo();
}

function tagAdd(todoObj) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');
	li.id = todoObj.id;
	span.innerText = todoObj.text;
	button.innerText = '❌';

	todoList.appendChild(li);
	li.appendChild(span);
	li.appendChild(button);

	button.addEventListener('click', delTodo);
}

function todoAdd(event) {
	event.preventDefault();
	const todoObj = {
		text: todoInput.value,
		id: Date.now(),
	};
	todoInput.value = '';
	todos.push(todoObj);
	saveTodo();

	tagAdd(todoObj);
}

todoForm.addEventListener('submit', todoAdd);

const savedTodo = JSON.parse(localStorage.getItem('todos'));

if (savedTodo !== null) {
	todos = savedTodo;
	savedTodo.forEach((item) => {
		tagAdd(item);
	});
}
