const addBtn = document.querySelector(".add");
const darkMode = document.querySelector(".darkMode");
const todosDiv = document.querySelector(".todos");
const input = document.querySelector(".input");
const body = document.body;

let todos = [];

darkMode.addEventListener("click", () => {
	body.classList.toggle("dark");
});
addBtn.addEventListener("click", () => {
	const id = Math.random() * 1000000;
	todos.push({ todo: input.value, id: id, completed: true });

	input.value = "";

	display();
});

function deleteTodo(id) {
	console.log(id);
	todos = todos.filter((e) => e.id !== id);
	console.log(todos);

	display();
}

function completed(id) {
	todos.forEach((e) => {
		if (e.id == id) e.completed = !e.completed;
	});

	display();
}

function display() {
	const newTodos = todos.map(
		(e) =>
			`<li class=${e.completed ? "underline" : ""}>${
				e.todo
			} <div><button onclick="deleteTodo(${
				e.id
			})">delete</button><button onclick="completed(${
				e.id
			})">completed</button></div></li>`
	);
	let x = "";
	newTodos.forEach((e) => (x += e));
	todosDiv.innerHTML = x;
}
