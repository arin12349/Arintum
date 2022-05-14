const neon = document.querySelector(".neon");
const center = neon.querySelector(".info-center");
const infoCenter = document.querySelector(".info-center");

function neonMake(name){
    const obj = document.querySelector(`.${name}`);
    if (obj==null){
        return null;
    }
    const clone = [];
    const neonColor = ["#e2569a", "#668ecf"];
    for(let i=0; i<2; i++){
        const tmp = obj.cloneNode(true);
        // tmp.style.top = obj.offsetTop+"px";
        // tmp.style.left = obj.offsetLeft+"px";
        tmp.style.color = neonColor[i];
        tmp.style.zIndex = `-${i}`;
        tmp.style.whiteSpace = "pre";
        tmp.classList.add(`neon${i+1}`);
        clone.push(tmp);
        setInterval(() => {
            tmp.textContent = obj.textContent;
        }, 1000);
    }
    // clone[0].style.transform= "translate3d(-7px, -3px, 0px)";
    // clone[1].style.transform= "translate3d(7px, 3px, 0px)";
    clone[0].style.transform= "translate3d(-1%, -2%, 0px)";
    clone[1].style.transform= "translate3d(1%, 2%, 0px)";
    return divMake(clone, name);
}

function divMake(clone, name){
    const div = document.createElement("div");
    div.id = name;
    // div.className = name;
    clone.forEach((clonetmp) => (div.appendChild(clonetmp)));
    return div;
}

function neonAppend(div, parent){
    if (div!=null){
        parent.appendChild(div);
    }
}

$(".input-name").on("propertychange change keyup paste input", function() {
    var currentVal = $(this).val();
    // if(currentVal == oldVal) {
    //     return;
    // }
    $(".input-name.neon1").val(currentVal);
    $(".input-name.neon2").val(currentVal);
    // alert("changed!");
});

function neonRemove(name){
    const inputlist = document.querySelectorAll(`.${name}`);
    inputlist.forEach((list)=>(list.remove()));
}

function neonInit(){
    document.querySelector(".info-center.neon").innerHTML='';
    neonAppend(neonMake("clock"), center);
    neonAppend(neonMake("name_text"), center);
    neonAppend(neonMake("input-name"), center);
}

function handleSubmit(){
    console.log("2");
    const tmp = document.querySelector(".info-center.neon").children;
    const neonList= [].slice.call(tmp);
    neonList.forEach(element => {
        if(element.id == 'clock'){
        }else{
            element.remove();
        }
    });
    neonAppend(neonMake("name_text"), center);
    neonAppend(neonMake("input-name"), center);
}
infoCenter.addEventListener("submit", handleSubmit);
neonInit();