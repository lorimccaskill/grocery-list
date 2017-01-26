var listCount = 0;

function createGroup(name) {
    var dynamicList = document.getElementById('list-display');
    var newGroup = document.createElement('ul');
    var groupName = document.createElement('li');

    newGroup.id = name + '-list'; 
    groupName.innerHTML = (name);
    newGroup.appendChild(groupName);
    dynamicList.appendChild(newGroup);
}

function addListItem(item, type) {
    var listGroup = document.getElementById(type + '-list');
    var listItem = document.createElement('li');

    listItem.innerHTML = (item);
    listGroup.appendChild(listItem);
}

function processInput(newItem, category) {
    // confirm text input is not blank
    if (newItem != '') {
        // check to see if category's list already exists
        if (!document.getElementById(category + '-list')) {
            createGroup(category);
            addListItem(newItem, category);
        } else {
            addListItem(newItem, category);
        }
        listCount++;
    } else {
        console.log('submit text is blank');
    }
}

function init() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        var newText = document.getElementById('new-item').value;
        var category = document.getElementById('food-group').value;
        processInput(newText, category);
        console.log('submit button clicked');
        event.preventDefault();
    });
}

init();