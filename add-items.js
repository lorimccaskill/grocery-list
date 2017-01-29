var groceryList = [ ];

function storeGroup(group) {
    // add new group to groceryList array
    var newGroup = [ ];
    newGroup.push(group);
    groceryList.push(newGroup);
}

function storeItem(item, type) {
    var groupArray;
    for (var i=0; i<groceryList.length; i++) {
        // find correct 'group' array in groceryList that matches type
        if (groceryList[i][0] == type) {
            groupArray = groceryList[i];
            groupArray.push(item);
        }
    }
}

function createGroup(name) {
    var dynamicList = document.getElementById('list-display');
    var newGroup = document.createElement('ul');
    var groupName = document.createElement('li');

    newGroup.id = name + '-list'; 
    groupName.innerHTML = (name);
    newGroup.appendChild(groupName);
    dynamicList.appendChild(newGroup);
    storeGroup(name);
}

function addListItem(item, type) {
    var listGroup = document.getElementById(type + '-list');
    var listItem = document.createElement('li');

    listItem.innerHTML = (item);
    listGroup.appendChild(listItem);
    storeItem(item, type);
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
        console.log('groceryList = ', groceryList);
        event.preventDefault();
    });
}

init();