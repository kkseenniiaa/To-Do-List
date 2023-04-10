let taskInput = document.querySelector('#taskInput');
let addBtn = document.querySelector('#addBtn');
let list = document.querySelector('#list');
let tasks = [];
if (localStorage.getItem('htmlsLs')) {
    list.innerHTML = localStorage.getItem('htmlLs');
}

addBtn.addEventListener('click', function () {
    let elem = document.createElement('li');
    addTask(elem);
    list.append(elem);
    taskInput.value = '';
})

function addTask(elem) {
    elem.classList.add('item');
    elem.textContent = taskInput.value;
    let itemBtns = document.createElement('div');
    elem.append(itemBtns);
    itemBtns.className = 'item__btns';

    let donebtn = document.createElement('i');
    donebtn.className = "fa-regular fa-square-check";
    itemBtns.append(donebtn);
    donebtn.setAttribute('data-action', 'complete');

    let deleteBtn = document.createElement('i');
    deleteBtn.className = 'fa-solid fa-trash-can';
    itemBtns.append(deleteBtn);
    deleteBtn.setAttribute('data-action', 'delete');
}

let newTask = {
    id: Date.now(),
    text: taskInput.value,
    complete: false
}

function completeBtn(target) {
    target.closest('li').classList.toggle('done');
    localStorage.setItem('htmlsLs', list.innerHTML);
}

function removeTask(target) {
    target.closest('li').remove();
    taskInput.value = '';
    let index = tasks.findIndex((task) => {
        return task.id == target.closest('li').id
    });
}

list.addEventListener('click', (event) => {
    target = event.target;
    if (target.dataset.action == 'complete') {
        completeBtn(target);
    };
    if (target.dataset.action == 'delete') {
        removeTask(target);
    };
})
