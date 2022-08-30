
import './style.css';

import { Todo, TodoList } from './classes/index.classes.js';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

todoList.todos.forEach(todo => createTodoHtml( todo ));
