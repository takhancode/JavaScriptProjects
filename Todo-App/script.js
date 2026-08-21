let addbtn=document.getElementById("add");
let taskinput=document.getElementById("task-input");
let all=document.getElementById("all");
let active=document.getElementById("active");
let completed=document.getElementById("completed");
let tasks=[];


addbtn.addEventListener("click",function(){
    let taskobj={
     task:taskinput.value,
     active:true,
     completed:false
    }
    tasks.push(taskobj);
    renderTask();

});

function renderTask(){
    tasks.forEach(function(taskobj){
    let div=document.createElement("div");
    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    let span=document.createElement("span")
    span.innerText=taskobj.task;
    div.appendChild(checkbox);
    div.appendChild(span);
    let editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    div.appendChild(editbtn);
    div.appendChild(deletebtn);
    let tasksection = document.querySelector(".task-section");
    tasksection.appendChild(div);
    });

};



