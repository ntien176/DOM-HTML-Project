var delBtns = document.querySelectorAll('.del-btn');
Array.from(delBtns).forEach(function(delBtn) {
    delBtn.addEventListener('click', function(e) {
        const li = e.target.parentNode;
        // li.remove();
        li.parentNode.removeChild(li);
    })

})