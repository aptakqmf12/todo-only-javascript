import {addItem, deleteItem} from './todo.js';
'use strict';

let addBtn = document.querySelector('.input__btn');
addBtn.addEventListener("click", addItem);

let todoDelete = document.querySelector('.todoDelete');
todoDelete.addEventListener("click", deleteItem);