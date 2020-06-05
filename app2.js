document.addEventListener('DOMContentLoaded', function(){
    //Delete a book
var list = document.querySelector('.list');
list.addEventListener('click', function(e) {
    if (e.target.className == 'del-btn btn') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})
//Add a book
var addBookForm = document.querySelector('#add-book');
addBookForm.addEventListener('click', function(e) {
    if (e.target.className == 'add-btn btn') {
        e.preventDefault();
        let nameBook = addBookForm.querySelector('input[type="text"]').value;
        if (nameBook !== '') {
            // Create Elements
            const liE = document.createElement('li');
            const spanE = document.createElement('span');
            const btnE= document.createElement('button');
            // Add content
            spanE.textContent = nameBook;
            btnE.textContent = 'delete';
            // Append child
            liE.appendChild(spanE);
            liE.appendChild(btnE);
            list.appendChild(liE);
            // Add Style
            liE.className = 'item';
            btnE.className = 'del-btn btn';
            // clear input data
            addBookForm.querySelector('input[type="text"]').value = '';
        } else {
            alert('Enter book\'s name')
        }
    }
})
// Hide list
const hide = document.querySelector('#hide');
hide.addEventListener('change', function(e) {
    if (!hide.checked) {
        list.style.visibility = 'visible'
    } else {
        list.style.visibility = 'hidden'
    };
})
//Search box
const search = document.querySelector('#header input');
const items = list.querySelectorAll('.item span')
search.addEventListener('keyup', function() {
    let keyword = search.value.toLowerCase();
    for (let i = 0; i < items.length; i++) {
        Array.from(items).forEach(function(e) {
            let nameBook = e.textContent.toLowerCase();
            if(nameBook.includes(keyword)) {
                e.parentElement.style.display = 'flex'
            } else {
                e.parentElement.style.display = 'none'
            }
        })
    }
})
// Tab content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if (e.target.nodeName == 'LI') {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel) {
            if (panel == targetPanel) {
                panel.classList.add('active')
            } else {
                panel.classList.remove('active')
            }
        })
    }
})
})
