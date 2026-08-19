
let currentquestion=0;
let questionplace=document.querySelector("h2");

let nextbtn=document.getElementById("nextButton");
let ansbtn=document.getElementsByClassName("ans");

let questions=[

{
    question:"What Does HTML Stands For?",
    answers:[
       "HyperTextMarkupLanguage",
       "HyperTextPreprocesseor",
       "HighTextMachineLanguage",
       "HomeToolMarkupLanguage"
    ],
    correct:0
}
,

{

    question:"Capital City of Pakistan",
    answers:[
        "Lahore",
        "Islamabad",
        "Karachi",
        "Faisalabad"
    ],
    correct:1

},
{
  question:"Which Html Tag is used to create Hyperlink",
  answers:[
    "<link>",
    "<a>",
    "<href>",
    "<url>"
  ],
  correct:1
},

{

question:"who was first governor of Pakistan",
answers:[
    "Quaid-e-Azam",
    "Liaqat ali khan",
    "Lord Mount",
    "Rehman Chaudary"
],
correct:0
},

{
    question:"Which Html Tag is used to insert an image",
    answers:[
        "img",
        "div",
        "p",
        "h1"
    ],
    correct:0
}

];

 questionplace.textContent=questions[currentquestion].question;


nextbtn.addEventListener("click",function(){

    currentquestion++;
    questionplace.textContent=questions[currentquestion].question;

   
})
 
ansbtn.forEach((val,x)=>{
    val.textcontent=questions[currentquestion].answers[x];
})

