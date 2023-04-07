let taskInput = document.querySelector('#taskInput'); //input
let addBtn = document.querySelector('#addBtn');  //btn
let list = document.querySelector('#list');

if (localStorage.getItem('htmlsLs')) {
    list.innerHTML = localStorage.getItem('htmlLs');
}

function addTask(elem) {
    elem.classList.add('item');
    elem.textContent = taskinput.value;
    let itemBtns = document.createElement('div');
    elem.append(itemBtns);
    itemBtns.className = 'item_btns';

    let donebtn = document.createElement('i');
    donebtn.className = "fa-regular fa-square-check";
    itemBtns.append(donebtn);
    donebtn.setAttribute('data-action', 'complete');

    let deletebtn = document.createElement('i');
    deletebtn.className = 'fa-solid fa-trash-can';
    itemBtns.append(deleteButton);
    deleteButton.setAttribute('data-action', 'delete');
}

function comleteBtn() {
    target.closest('li').classList.toggle('done');
    localStorage.setItem('htmlsLs', list.innerHTML);
}

function removeTask() {
    target.closest('li').remove();
    taskInput.value = '';
    localStorage.setItem('htmlsLs', list.innerHTML);
}


/*list.addEventListener('click', (event) => {
    target = event.target;
    if (target.dataset.ac);





        

    let item = document.createElement('div');
    item.className = 'item_btns';

    chbox.addEventListener('click', function () {
        elem.classList.toggle('done');
    })

    let btn1 = document.createElement('i')
    btn1.className = 'fa-solid fa-trash-can';
    item.append(btn1);

    btn1.addEventListener('click', function () {
        list.removeChild(elem);
    })

})*/
