const addTaskButton = document.getElementsByClassName('add_task');
const to_do_type = document.getElementById('to_do');
const in_progress_type = document.getElementById('in_progress');
const done_type = document.getElementById('done');
const taskInput = document.getElementById('task_input');

const todoList = [];
const inProgressList = [];
const doneList = [];

function getTypeByString(type) {
    switch (type) {
        case "to_do":
            return to_do_type;
        case "in_progress":
            return in_progress_type;
        case "done":
            return done_type;
    
        default:
            break;
    }
}

function getListByString(type) {
    switch (type) {
        case "to_do":
            return todoList;
        case "in_progress":
            return inProgressList;
        case "done":
            return doneList;
    
        default:
            break;
    }
}

function placeAt(indice, element, array) {
    for (let i = array.length - 1; i >= indice; i--) {
        array[i + 1] = array[i];
    }
    array[indice] = element;
}

function addTaskToList(task, type) {
    switch (type) {
        case "to_do":
            placeAt(0, task, todoList);
            break;
        case "in_progress":
            placeAt(0, task, inProgressList);
            break;
        case "done":
            placeAt(0, task, doneList);
            break;
    
        default:
            break;
    }
}

function getTaskElement(task) {
    const taskElement = document.createElement('label');
    taskElement.classList.add('task');
    taskElement.innerText = task;
    return taskElement;
}

function getTaskDivElement() {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task_div');
    return taskDiv;
}

function positionTaskElement(task, beforeElement) {
    const taskElement = getTaskElement(task);
    const divElement = getTaskDivElement();
    const parent = beforeElement.parentElement;

    divElement.classList.add('to_do_task');

    divElement.appendChild(taskElement);
    parent.insertBefore(divElement, beforeElement);
}

function updateTasks(type) {

    list = getListByString(type);
    type = getTypeByString(type);

    var loop_iterate = type.children.length-1;

    if (loop_iterate < list.length) {
        loop_iterate = list.length;
    }

    for (let i = 0; i < loop_iterate; i++) {
        if (list.length > type.children.length-1) {
            positionTaskElement(list[i], type.children[i]);
        } else if(list.length < type.children.length-1) {
            type.children[i].remove();
        }
    }
}

var type = "to_do";

for (let i = 0; i < addTaskButton.length; i++) {
    addTaskButton[i].addEventListener('click', () => {
        if (addTaskButton[i].classList.contains('to_do')) {
            type = "to_do";
        } else if (addTaskButton[i].classList.contains('in_progress')) {
            type = "in_progress";
        } else {
            type = "done";
        }

        taskInput.style.display = 'flex';
        taskInput.focus();

        console.log(type);
    });
}

var task = "None";

taskInput.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        taskInput.style.display = 'none';
        console.log('Escape');
    } else if (e.key == "Enter") {

        if (taskInput.value === '') {
            taskInput.style.display = 'none';
            return;
        }

        task = taskInput.value;
        addTaskToList(task, type);
        updateTasks(type);
        taskInput.style.display = 'none';
    }
});