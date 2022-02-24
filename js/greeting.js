const nameContianer = document.querySelector(".name");
const LOCALSTORAGE_NAME_KEY = "name";


function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const value = input.value;
    console.log(value);
    localStorage.setItem(LOCALSTORAGE_NAME_KEY, value);
    paintName(value);
}

function paintLogin(){
    const inputName =  document.createElement("input");
    inputName.placeholder = "Type Your Name";
    inputName.type = "text";
    inputName.className = "input-name";
    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmit);
    form.appendChild(inputName);
    nameContianer.appendChild(form);
}

function paintName (name){
    nameContianer.innerHTML = "";
    const title = document.createElement("span");
    title.className = "name_text";
    title.innerHTML = `Hello ${name}`;
    nameContianer.appendChild(title);
}
function loadName(){
    const userName = localStorage.getItem(LOCALSTORAGE_NAME_KEY);
    if (userName === null){
        paintLogin();
    }
    else{
        paintName(userName);
    }
}

loadName();
