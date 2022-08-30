import "../css/components.css";
import { Todo } from "../classes/index.classes.js";
import { todoList } from "../index.js";
// import webPackLogo from '../assets/img/webpack-logo.png';

const d = document;

//Referencias en HTML
const divTodoList = d.querySelector(".todo-list");
const txtInput = d.querySelector(".new-todo");
const btnDelete = d.querySelector(".clear-completed");
const ulFilters = d.querySelector('.filters');
const anchorFilters = d.querySelectorAll('.filtro');

export const createTodoHtml = (todo) => {
  const htmlTodo = `
    <li class="${todo.completed ? "completed" : ""}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${
              todo.completed ? "checked" : ""
            }>
            <label>${todo.homeWork}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

  const div = d.createElement("div");
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

//Eventos

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const newTodo = new Todo(txtInput.value);
    todoList.newTodo(newTodo);

    createTodoHtml(newTodo);

    txtInput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const elementName = event.target.localName;
  const todoElement = event.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute("data-id");

  if (elementName.includes("input")) {
    //click en el check

    todoList.markCompleteTodo(todoId);
    todoElement.classList.toggle("completed");
  } else if (elementName.includes("button")) {
    todoList.deleteTodo( todoId );
    divTodoList.removeChild(todoElement);
  }
});

btnDelete.addEventListener('click', () => {

  todoList.deleteCompleted();

  for( let i = divTodoList.children.length-1; i>=0; i--){
    const element = divTodoList.children[i];

    if( element.classList.contains('completed')){
      divTodoList.removeChild(element);
    }
  }

});

ulFilters.addEventListener('click', event => {

  const filter = event.target.text;
  if(!filter) { return; };

  anchorFilters.forEach( el => el.classList.remove('selected'));
  event.target.classList.add('selected');

  for( const el of divTodoList.children ){
    el.classList.remove('hidden');
    const completed = el.classList.contains('completed');

    switch(filter){
      case 'Pendientes':
        if(completed){
          el.classList.add('hidden');
        }
      break;

      case 'Completados':
        if(!completed){
          el.classList.add('hidden');
        }
      break;

    }
  }
})
