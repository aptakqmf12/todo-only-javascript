let todoList = [];
let item = document.querySelector('.item');
let showBox = document.querySelector('.show__box');

function addItem(){
    if(item.value != ""){
        todoList = [...todoList, item.value];
    }
    else{
        alert("값을 입력해주세요")
    }
    item.value = "";
    item.focus();
    showItem();
}
function showItem(){
    // 기존 화면에 뿌려진 todo를 리셋 
    let prevTodo = document.querySelectorAll('.show__box > li');
    prevTodo.forEach(e => {
        e.remove();
    })
    // 새로운 todo와 삭제버튼을 뿌려줌
    todoList.forEach( e => {
        let todo = document.createElement('li');
        let todoDelete = document.createElement('button');
        todoDelete.className = "todoDelete";
        let todoTxt = document.createTextNode(e);

        todoDelete.textContent = "delete";
        todo.appendChild(todoTxt);

        todo.append(todoDelete);
        showBox.append(todo);
    });
    console.log(todoList)
}
function deleteItem(){
    console.log("delete!!")
}

export  {addItem, deleteItem} ;