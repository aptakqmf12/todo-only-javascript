let todoList = [];

//데이터 받는부분
const firebaseConfig = {
    apiKey: "AIzaSyAwnltMvwCLc6QBjEGX5hZcfkwfCJnmdlw",
    authDomain: "only-js-todolist.firebaseapp.com",
    projectId: "only-js-todolist",
    storageBucket: "only-js-todolist.appspot.com",
    messagingSenderId: "1011094966726",
    appId: "1:1011094966726:web:28eee66d1fc0d03cf5a2c7",
    measurementId: "G-D6B64GCQWH"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  db.collection('todolist').get().then( (res) => {
    res.forEach( (doc) => {
      todoList = [...todoList, doc.data()];
      showItem();   
    });
  });

let item = document.querySelector('.item');
let showBox = document.querySelector('.show__box');

function addItem(){
    if(item.value != ""){
        todoList = [...todoList, {todo : item.value, idx: generateRandomNum() }];
        db.collection('todolist').add({todo: item.value, idx : generateRandomNum()})
    }
    else{
        alert("값을 입력해주세요")
    }
    item.value = "";
    item.focus();
    showItem();
    console.log(todoList)
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
db.collection('todolist').doc().delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});

export  {addItem} ;