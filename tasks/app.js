const form = document.querySelector('#task-form');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');

loadEventListeners();

// Load all event listeners
function loadEventListeners(){

    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);

    // remove task event
    taskList.addEventListener('click', removeTask);

    // clear tasks
    clearBtn.addEventListener('click', clearTasks);
    
    // filter tasks
    filter.addEventListener('keyup', filterTasks);
}
function getTasks(){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task){
         // Create li element
        const li = document.createElement('li');
        li.className = 'collection-item';

        li.appendChild(document.createTextNode(task));
        const a = document.createElement('a');
        a.className = 'delete-item secondary-content';
        a.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(a);

        console.log(li);
        taskList.appendChild(li);
    })
}
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        if(task.firstChild.textContent.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });
}

function clearTasks(e){
    // clear all the tasks
    // taskList.innerHTML = "";

    // fastest method
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
}
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();
            removeTaskInLocalStorage(e.target.parentElement.parentElement);
        }
    }
}
function addTask(e){
    if(taskInput.value === ""){
        alert('Add a task');
    }
    else {
            // Create li element
            const li = document.createElement('li');
            li.className = 'collection-item';

            li.appendChild(document.createTextNode(taskInput.value));
            const a = document.createElement('a');
            a.className = 'delete-item secondary-content';
            a.innerHTML = '<i class="fa fa-remove"></i>';
            li.appendChild(a);

            console.log(li);
            taskList.appendChild(li);

            storeTaskInLocalStorage(taskInput.value);

            taskInput.value = '';
    }
    e.preventDefault();
}

function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskInLocalStorage(taskitem) {
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task, index){
        if(taskitem.textContent === task){
            tasks.splice(index, 1)
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}