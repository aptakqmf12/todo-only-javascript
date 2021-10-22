// import {firestore} from '../firebase.js';


// firestore.collection('test').get()
//     .then( (doc) => {
//         console.log(doc);
//     });

let todoList = [];
let item = document.querySelector('.item');
let showBox = document.querySelector('.show__box');

function addItem(){
    if(item.value != ""){
        todoList = [...todoList, {todo : item.value, idx: generateRandomNum() }];
        console.log(`할일 생성`);
    }
    else{
        alert("값을 입력해주세요")
    }
    item.value = "";
    item.focus();

    showItem();
}
function showItem(){
    // 뿌려진 리스트 리셋
    let prevTodo = document.querySelectorAll('.show__box > li');
    prevTodo.forEach(e => {
        e.remove();
    })
    // 리스트 다시 그림
    todoList.forEach( e => {
        let todo = document.createElement('li');
        let todoDelete = document.createElement('button');
        todoDelete.className = "todoDelete";
        let todoTxt = document.createTextNode(e.todo);

        todoDelete.textContent = "delete";
        todo.appendChild(todoTxt);
        todo.dataset.idx = e.idx;

        todo.append(todoDelete);
        showBox.append(todo);
        
    });

    deleteItem();
}
function deleteItem(){
    let todoDelete = document.querySelectorAll('.todoDelete');
    todoDelete.forEach( btn => {
        btn.addEventListener("click", e =>{
            let deletedList = e.target.closest('li');
            todoList =  todoList.filter( todoList=> {return todoList.idx !== deletedList.dataset.idx});
            
            showItem();
        });
    })
    
}
function generateRandomNum(){
    let str = "";
    for(let i=0; i<6; i++){
       str += Math.floor(Math.random() * 10);
    }
    return str;  
}

export  {addItem} ;