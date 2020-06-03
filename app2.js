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