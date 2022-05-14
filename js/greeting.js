const nameContianer = document.querySelector(".name");
const LOCALSTORAGE_NAME_KEY = "name";


function handleSubmit(event){
    console.log("aa");
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const value = input.value;
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
    // const inputlist = document.querySelectorAll(".input-name");
    // console.log(inputlist);
    // inputlist.forEach((list)=>(list.remove()));
    // console.log("remove!");
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
