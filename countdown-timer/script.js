let dateinput=document.getElementById("dateInput");
let [days,hours,min,sec]=document.querySelectorAll("h2");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let timer;
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

function countdown(){
let now = new Date();
let target = new Date(dateinput.value);
let difference = target - now;
 if (difference <= 0) {
         days.innerText = 0;
         hours.innerText = 0;
        min.innerText = 0;
        sec.innerText = 0;
        clearInterval(timer);
         return;
   }
let daysValue = Math.floor(difference / 1000 / 60 / 60 / 24);
let remainingmillisecond = difference - (daysValue * 1000 * 60 * 60 * 24);
let remaininghours =Math.floor( remainingmillisecond / 1000 / 60 / 60);
let remainingMillisecondsAfterHours = remainingmillisecond-(remaininghours*60*60*1000);
let remainingminutes = Math.floor(remainingMillisecondsAfterHours/1000/60);
let remainingmillisecondafterminutes=remainingMillisecondsAfterHours-(remainingminutes*1000*60);
let remainingseconds=Math.floor(remainingMillisecondsAfterminutes/1000);
days.innerText = daysValue;
hours.innerText = remaininghours;
min.innerText = remainingminutes;
sec.innerText = remainingseconds;
}
start.addEventListener("click",function(){
    clearInterval(timer);
    countdown();
    timer=setInterval(() => {
        countdown();
    }, 1000);

})
stop.addEventListener("click",function(){
    clearInterval(timer);
});



//gpt polished code
// let dateinput = document.getElementById("dateInput");

// let [days, hours, min, sec] =
//     document.querySelectorAll("h2");

// let start = document.getElementById("start");
// let stop = document.getElementById("stop");

// let timer;

// function countdown() {

//     let now = new Date();
//     let target = new Date(dateinput.value);

//     let difference = target - now;

//     if (difference <= 0) {
//         days.innerText = 0;
//         hours.innerText = 0;
//         min.innerText = 0;
//         sec.innerText = 0;
//         clearInterval(timer);
//         return;
//     }

//     let daysValue =
//         Math.floor(difference / 1000 / 60 / 60 / 24);

//     let remainingmillisecond =
//         difference -
//         (daysValue * 1000 * 60 * 60 * 24);

//     let remaininghours =
//         Math.floor(
//             remainingmillisecond / 1000 / 60 / 60
//         );

//     let remainingMillisecondsAfterHours =
//         remainingmillisecond -
//         (remaininghours * 60 * 60 * 1000);

//     let remainingminutes =
//         Math.floor(
//             remainingMillisecondsAfterHours / 1000 / 60
//         );

//     let remainingmillisecondafterminutes =
//         remainingMillisecondsAfterHours -
//         (remainingminutes * 1000 * 60);

//     let remainingseconds =
//         Math.floor(
//             remainingmillisecondafterminutes / 1000
//         );

//     days.innerText = daysValue;
//     hours.innerText = remaininghours;
//     min.innerText = remainingminutes;
//     sec.innerText = remainingseconds;
// }

// start.addEventListener("click", function () {

//     clearInterval(timer);

//     countdown();

//     timer = setInterval(countdown, 1000);

// });

// stop.addEventListener("click", function () {

//     clearInterval(timer);

// });