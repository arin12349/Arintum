const bglist = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const bg = document.body.querySelector(".bg");
const screen = document.getElementById("screen");   

function getBg(){
  const choiseBg = bglist[Math.floor(Math.random()*bglist.length)];
  const date= Math.floor(Date.now()/(24*60*60*1000));
  const bgObject = {
    url:`bg/${choiseBg}`,
    date: date
  };
  localStorage.setItem("bg", JSON.stringify(bgObject));  
  loadBg();
}
function loadBg() {
  const bgItem = localStorage.getItem("bg");
  if (bgItem === null){
    getBg()
  }else{
    const parseBg = JSON.parse(bgItem);
    const now = Math.floor(Date.now()/(24*60*60*1000));
    if (now > parseBg.date){
      getBg();
    }
    else{
      //document.body.style.backgroundImage =`url(${parseBg.url})`;
      bg.style.backgroundImage =`url(${parseBg.url})`;
    }
  }
}


function resize(){
  // bg.style.width= window.innerWidth+300+'px';
  // bg.style.height= window.innerWidth+50+'px';
  screen.style.width= window.innerWidth+'px';
  screen.style.height= window.innerHeight+'px';
}

function init(){
  loadBg();
  // resize();
  // screen.style.width = document.body.clientWidth+300+'px';
  // screen.style.height = document.body.clientWidth+50+'px'
  // screen.style.width="2200px";
  // screen.style.height="1970px";
  // screen.style.width=window.screen.availWidth+300+'px';
  // screen.style.height=window.screen.availWidth+50 +'px';
  bg.style.width=window.screen.availWidth+300+'px';
  bg.style.height=window.screen.availWidth+50 +'px';
  screen.style.width= window.innerWidth+'px';
  screen.style.height= window.innerHeight+'px';
  const parallax = new Parallax(screen,{clipRelativeInput: true, hoverOnly: true});
}
init();
window.addEventListener("resize", resize);