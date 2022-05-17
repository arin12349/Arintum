const sidebar = document.querySelector(".sidebar");
const todoList = document.querySelector(".todo-list");
const checkList = document.querySelector(".check-list");
const deleteList = document.querySelector(".delete-list");
const bookmark = document.querySelector(".bookmark");
const LOCALSTORAGE_TODO_KEY = "todolist";
const LOCALSTORAGE_CHECK_KEY = "check";

function handleSubmit(event){
    event.preventDefault();
    console.log("aa");
    const form = event.target;
    const input = form.querySelector("input");
    const value = input.value;
    let list = localStorage.getItem(LOCALSTORAGE_TODO_KEY);
    let item = localStorage.getItem(LOCALSTORAGE_CHECK_KEY);
    if (list === null){//EMPTY
        list = [];
        list.push(value);
        list = JSON.stringify(list);
        localStorage.setItem(LOCALSTORAGE_TODO_KEY, list);
        
        item = [];
        item.push("");
        item = JSON.stringify(item);
        localStorage.setItem(LOCALSTORAGE_CHECK_KEY, item);
    }else{//exist
        console.log(list);
        list = JSON.parse(list);
        list.push(value);
        list = JSON.stringify(list);
        localStorage.setItem(LOCALSTORAGE_TODO_KEY, list);

        item = JSON.parse(item);
        item.push("");
        item = JSON.stringify(item);
        localStorage.setItem(LOCALSTORAGE_CHECK_KEY, item);
    }
    // appendTodo(value);
    // makeCheck();
    makeSidbar();
}

function makeSidbar(){
    const todo = localStorage.getItem(LOCALSTORAGE_TODO_KEY);
    const check = localStorage.getItem(LOCALSTORAGE_CHECK_KEY);
    todoList.textContent="";
    checkList.textContent="";
    deleteList.textContent="";
    makeInput();
    if (check != null || todo != null){
        makeTodo(todo);
        makeCheck(check);
    }
}

function makeInput(){
    const todo = document.createElement("input");
    todo.placeholder = "Write your Todos";
    todo.type = "text";
    todo.className = "todo-input"
    todo.maxLength = "15";
    todoList.appendChild(todo);
}

function makeTodo(list){
    list = JSON.parse(list);
    list.forEach(function(element, num){
        appendTodo(element, num);
    })
}

function makeCheck(list){
    list = JSON.parse(list);
    list.forEach(function(element,num){
        appendCheck(element, num);
        appendDelete(num);
    })
}

function appendDelete(num){
    const del = document.createElement("span");
    del.className = "delete";
    del.textContent="❌";
    del.id=String(num);
    del.addEventListener("click", deleteSubmit);
    deleteList.appendChild(del);
}
function appendTodo(value, num){
    const todo = document.createElement("span");
    todo.className = "todo";
    todo.textContent = value;
    todo.id = String(num);
    const todoinput = document.querySelector(".todo-input");
    todoinput.value = "";
    todoinput.before(todo);
}

function appendCheck(value, num){
    const check = document.createElement("span");
    check.className = "check";
    check.textContent=value;
    check.id=String(num);
    if(value == "✔"){
        checkLine(value, num)
    }
    check.addEventListener("click", checkSubmit);
    checkList.appendChild(check);
}


function checkSubmit(event){
    event.preventDefault();
    const check= event.target;
    const value = check.textContent;
    if (value === ""){
        check.textContent = "✔";
    }else{
        check.textContent = "";
    }
    let item = localStorage.getItem(LOCALSTORAGE_CHECK_KEY);
    item = JSON.parse(item);
    item[parseInt(check.id)] = check.textContent;
    item = JSON.stringify(item);
    localStorage.setItem(LOCALSTORAGE_CHECK_KEY,item);
    checkLine(value, check.id);
}

function deleteSubmit(event){
    event.preventDefault();
    const del = event.target;
    const value = parseInt(del.id);
    let check = localStorage.getItem(LOCALSTORAGE_CHECK_KEY);
    let item = localStorage.getItem(LOCALSTORAGE_TODO_KEY);
    list = [check, item];
    list.forEach(function(element,num){
        element = JSON.parse(element);
        element.splice(value,1);
        element = JSON.stringify(element);
        list[num] = element;
    });
    localStorage.setItem(LOCALSTORAGE_CHECK_KEY, list[0]);
    localStorage.setItem(LOCALSTORAGE_TODO_KEY, list[1]);
    
    makeSidbar();
}

function checkLine(value, id){
    const span = todoList.children[id];
    // if(value === ""){
    //     span.style.textDecoration = "line-through";
    // }else{
    //     span.style.textDecoration = "";
    // }
    span.classList.toggle("checked");
}


//close toggle
// sidebar.addEventListener("mouseleave",function(event){
//     console.log("out");
//     console.log(event.target);
//     sidebar.classList.toggle("close");
// })
// sidebar.addEventListener("mouseenter",function(event){
//     console.log("on");  
//     console.log(event.target);
//     sidebar.classList.toggle("close");
// })

//close click
bookmark.addEventListener("click", function(){
    sidebar.classList.toggle("close");
})

sidebar.addEventListener("submit", handleSubmit);

// let list = localStorage.getItem(LOCALSTORAGE_TODO_KEY);
// let listCheck = localStorage.getItem(LOCALSTORAGE_CHECK_KEY);
// if (list === null){
//     //empty
//     // makeInput();
//     makeSidbar();
// }else{
//     //exist
//     // makeInput();
//     // makeTodo(list);
//     // makeCheck(listCheck);
//     makeSidbar();
// }

makeSidbar();