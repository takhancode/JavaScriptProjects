let addbtn = document.getElementById("add");
let taskinput = document.getElementById("task-input");

let totalCount = document.getElementById("total-count");
let completedCount = document.getElementById("completed-count");

let all = document.getElementById("all");
let active = document.getElementById("active");
let completed = document.getElementById("completed");

let tasks = [];


// ADD TASK
addbtn.addEventListener("click", function () {

    let taskobj = {
        task: taskinput.value,
        active: true,
        completed: false
    };

    tasks.push(taskobj);

    taskinput.value = "";

    renderTask(tasks);
});


// RENDER TASKS
function renderTask(tasklist) {

    let tasksection = document.querySelector(".task-section");

    tasksection.innerHTML = "";

    tasklist.forEach(function (taskobj, index) {

        let div = document.createElement("div");

        // CHECKBOX
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = taskobj.completed;

        checkbox.addEventListener("change", function () {

            if (checkbox.checked) {

                taskobj.completed = true;
                taskobj.active = false;

            } else {

                taskobj.completed = false;
                taskobj.active = true;
            }

            renderTask(tasks);
        });


        // TASK TEXT
        let span = document.createElement("span");
        span.innerText = taskobj.task;


        // EDIT BUTTON
        let editbtn = document.createElement("button");
        editbtn.innerText = "Edit";

        editbtn.addEventListener("click", function () {

            let newTask = prompt("Enter new task");

            if (newTask !== null && newTask !== "") {

                taskobj.task = newTask;

                renderTask(tasks);
            }
        });


        // DELETE BUTTON
        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete";

        deletebtn.addEventListener("click", function () {

            tasks.splice(index, 1);

            renderTask(tasks);
        });


        // ADD ELEMENTS TO DIV
        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(editbtn);
        div.appendChild(deletebtn);

        tasksection.appendChild(div);
    });


    // TOTAL COUNT
    totalCount.innerText = tasks.length;


    // COMPLETED COUNT
    let completedTasks = tasks.filter(function (taskobj) {

        return taskobj.completed === true;

    });

    completedCount.innerText = completedTasks.length;
}


// COMPLETED FILTER
completed.addEventListener("click", function () {

    let completedTasks = tasks.filter(function (taskobj) {

        return taskobj.completed === true;

    });

    renderTask(completedTasks);
});


// ACTIVE FILTER
active.addEventListener("click", function () {

    let activeTasks = tasks.filter(function (taskobj) {

        return taskobj.active === true;

    });

    renderTask(activeTasks);
});


// ALL FILTER
all.addEventListener("click", function () {

    renderTask(tasks);
});