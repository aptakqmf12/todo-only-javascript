import {addItem} from './todo.js';
'use strict';

// form 기본기능 막기
let todoForm = document.querySelector('.todoForm');
todoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})
// input 엔터시
let inputTxt = document.querySelector('.item');
inputTxt.addEventListener('keyup',(e) => {
    if(e.keyCode === 13){
        addItem();
    }
})
// button 클릭시
let addBtn = document.querySelector('.input__btn');
addBtn.addEventListener("click", addItem);

