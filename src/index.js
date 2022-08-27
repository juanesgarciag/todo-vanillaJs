
import './style.css';

import { Todo, TodoList } from './classes/index.classes.js';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

const homework = new Todo('Aprender Typescript');
todoList.newTodo( homework );

console.log(todoList);

createTodoHtml( homework );