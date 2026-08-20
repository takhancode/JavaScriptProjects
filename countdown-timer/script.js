let dateinput=document.getElementById("dateInput");
let [days,hours,min,sec]=document.querySelectorAll("h2");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let now = new Date();
let target = new Date(dateinput.value);
let difference = target - now;
let daysValue = Math.floor(difference / 1000 / 60 / 60 / 24);
let remainingmillisecond = difference - (daysValue * 1000 * 60 * 60 * 24);
let remaininghours =
   Math.floor( remainingmillisecond / 1000 / 60 / 60);
let remainingMillisecondsAfterHours = remainingmillisecond-(remaininghours*60*60*1000);
let remainingminutes = Math.floor(remainingMillisecondsAfterHours/1000/60);
let remainingmillisecondafterminutes=remainingMillisecondsAfterHours-(remainingminutes*1000*60);
let remainingseconds=Math.floor(remainingMillisecondsAfterminutes/1000);
days.innerText = daysValue;
hours.innerText = remaininghours;
min.innerText = remainingminutes;
sec.innerText = remainingseconds;

