let todoList = [];

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
//화면초기에 데이터 받기
const db = firebase.firestore();
db.collection('todolist').get().then( (res) => {
    res.forEach( (doc) => {
        todoList = [...todoList, {todo : doc.data().todo, idx : doc.id }];
        showItem();   
    });
});

let item = document.querySelector('.item');
let showBox = document.querySelector('.show__box');
// 추가버튼 눌릴시
function addItem(){
    if(item.value != ""){
        //todoList에 데이터 추가
        todoList = [...todoList, {todo : item.value}];
        //db에 데이터 업로드
        db.collection('todolist').add( {todo:item.value} );
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
    console.log(todoList)
    todoList.forEach( e => {
        let todo = document.createElement('li');
        let todoDelete = document.createElement('button');
        todoDelete.className = "todoDelete";
        let todoTxt = document.createTextNode(e.todo);
        todo.dataset.idx = e.idx;

        todoDelete.textContent = "delete";
        todo.appendChild(todoTxt);

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
            todoList = todoList.filter( todos => {return todos.idx != deletedList.dataset.idx});
            db.collection('todolist').doc(deletedList.dataset.idx).delete()
            showItem();
        });
    })   
}

export  {addItem} ;