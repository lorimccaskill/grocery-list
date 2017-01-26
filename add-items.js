var listCount = 0;

function addListItem(newItem) {
    if (newItem != '') {
        var dynamicList = document.getElementById('list-display');
        var listItem = document.createElement('li');
        listItem.innerHTML = (newItem);
        dynamicList.appendChild(listItem);
        listCount++;
    } else {
        console.log('submit text is blank');
    }
}

function init() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        var newText = document.getElementById('new-item');
        addListItem(newText.value);
        console.log('submit button clicked');
        event.preventDefault();
    });
}

init();