const bglist = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const bg = document.body.querySelector(".bg");
  
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
function init(){
  loadBg();
  const screen = document.getElementById("screen"); 
  screen.style.width= window.innerWidth+300+'px';
  screen.style.height= window.innerWidth+50+'px';
  const parallax = new Parallax(screen,{clipRelativeInput: true, hoverOnly: true});
}
init();