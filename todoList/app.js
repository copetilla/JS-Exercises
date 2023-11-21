const addForm = document.querySelector('.add');
const list = document.querySelector('.toDos');
const search = document.querySelector('.search input');

const generateTemplate = toDo => {

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="text-light">${toDo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html;

};

const filterToDo = curr => {
    Array.from(list.children)
        .filter(toDo => !toDo.textContent.toLowerCase().includes(curr))
        .forEach(toDo => toDo.classList.add('hide'))

    Array.from(list.children)
        .filter(toDo => toDo.textContent.toLowerCase().includes(curr))
        .forEach(toDo => toDo.classList.remove('hide'))
};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const toDo = addForm.add.value.trim();

    if (toDo.length) {
        generateTemplate(toDo)
        addForm.reset();
    }

});

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

search.addEventListener('keyup', e => {

    const curr = search.value.trim().toLowerCase();
    filterToDo(curr);

});