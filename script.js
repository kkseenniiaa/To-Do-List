let input = document.querySelector('#taskInput');
let btn = document.querySelector('#addBtn');
let list = document.querySelector('#list');

btn.addEventListener('click', () => {
    let elem = document.createElement('li');
    elem.classList.add('item');
    elem.textContent = input.value;
    list.append(elem);

    let item = document.createElement('div');
    item.className = 'item_btns';
    elem.append(item);

    let chbox = document.createElement('i');
    chbox.className = "fa-solid fa-square-check";
    item.append(chbox);
    chbox.addEventListener('click', function () {
        elem.classList.toggle('done');
    })

    let btn1 = document.createElement('i');
    btn1.className = 'fa-solid fa-trash-can';
    item.append(btn1);

    btn1.addEventListener('click', function () {
        list.removeChild(elem);
    })
    input.value = '';
})