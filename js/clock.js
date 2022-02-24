const nowDate = document.querySelector(".date");
const clock = document.querySelector(".clock");

function clockMake(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();

  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  nowDate.innerText = `${year}-${month}-${day}`;
  clock.innerText = `${hour}:${minute}`;
}

clockMake();
setInterval(clockMake, 1000);