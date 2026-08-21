let addbtn = document.getElementById("add");
let taskinput = document.getElementById("task-input");
let totalCount = document.getElementById("total-count");
let completedCount = document.getElementById("completed-count");

let tasks = [];

addbtn.addEventListener("click", function(){

    let taskobj = {
        task: taskinput.value,
        active: true,
        completed: false
    };

    tasks.push(taskobj);

    renderTask(tasks);
});


function renderTask(tasklist){

    let tasksection = document.querySelector(".task-section");

    tasksection.innerHTML = "";

    tasklist.forEach(function(taskobj, index){

        let div = document.createElement("div");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked=taskobj.completed;
        checkbox.addEventListener("click", function(){

        if (checkbox.checked) {

        taskobj.completed = true;
        taskobj.active = false;

       } else {

        taskobj.completed = false;
        taskobj.active = true;

    }

      renderTask(tasks);
});

        let span = document.createElement("span");
        span.innerText = taskobj.task;

        div.appendChild(checkbox);
        div.appendChild(span);

        let editbtn = document.createElement("button");
        editbtn.innerText = "Edit";

        editbtn.addEventListener("click", function(){

      let newTask = prompt("Enter new task");

       if(newTask !== null && newTask !== ""){

        taskobj.task = newTask;

        renderTask(tasks);
    }

});

        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete";

         deletebtn.addEventListener("click", function(){
   
         tasks.splice(index, 1);

        renderTask(tasks);

});

        div.appendChild(editbtn);
        div.appendChild(deletebtn);

        tasksection.appendChild(div);

    });
      totalCount.innerText = tasks.length;
}

let completed = document.getElementById("completed");

completed.addEventListener("click", function(){

    let completedTasks = tasks.filter(function(taskobj){

        return taskobj.completed === true;

    });
    
     completedCount.innerText = completedTasks.length;
    renderTask(completedTasks);

});

let active = document.getElementById("active");

active.addEventListener("click", function(){

    let activeTasks = tasks.filter(function(taskobj){

        return taskobj.active === true;

    });

    renderTask(activeTasks);



});



let all = document.getElementById("all");
all.addEventListener("click", function(){

    renderTask(tasks);

});


