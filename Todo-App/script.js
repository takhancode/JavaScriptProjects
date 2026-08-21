let addbtn = document.getElementById("add");
let taskinput = document.getElementById("task-input");

let tasks = [];

addbtn.addEventListener("click", function(){

    let taskobj = {
        task: taskinput.value,
        active: true,
        completed: false
    };

    tasks.push(taskobj);

    renderTask();
});


function renderTask(){

    let tasksection = document.querySelector(".task-section");

    tasksection.innerHTML = "";

    tasks.forEach(function(taskobj, index){

        let div = document.createElement("div");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let span = document.createElement("span");
        span.innerText = taskobj.task;

        div.appendChild(checkbox);
        div.appendChild(span);

        let editbtn = document.createElement("button");
        editbtn.innerText = "Edit";

        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete";

        deletebtn.addEventListener("click", function(){

            tasks.splice(index, 1);

            renderTask();

        });

        div.appendChild(editbtn);
        div.appendChild(deletebtn);

        tasksection.appendChild(div);

    });
}