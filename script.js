// write js code here if required
let timer = document.getElementById("timer");

let time = new Date();
let year = time.getFullYear();
// console.log(time);
let month = time.getMonth();
let day = time.getDay();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

timer.innerHTML = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;