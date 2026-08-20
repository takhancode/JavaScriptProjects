let dateinput=document.getElementById("dateInput");
let [days,hours,min,sec]=document.querySelectorAll("h2");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let now = new Date();
let target = new Date(dateinput.value);
let difference = target - now;
let totalDays = difference / 1000 / 60 / 60 / 24;