var groceryList = [ ];

function createGroup(type) {
    var newGroup = [ ];
    newGroup.push(type);
    groceryList.push(newGroup);
    drawGroup(type);
}

function storeGroup(type) {
    // check to see if group already exists
    var groupFound = false;
    for (var i=0; i < groceryList.length; i++) {
        if(groceryList[i][0] == type) {
            groupFound = true;
        }
    }
    if (!groupFound) {
        createGroup(type);
    }
}

function storeItem(item, type) {
    var groupArray;
    for (var i=0; i < groceryList.length; i++) {
        // find correct 'group' array in groceryList that matches type
        if (groceryList[i][0] == type) {
            groupArray = groceryList[i];
            groupArray.push(item);
            drawListItem(item, type);
        }
    }
}

function drawGroup(name) {
    var dynamicList = document.getElementById('list-display');
    var newGroup = document.createElement('ul');
    var groupName = document.createElement('li');

    newGroup.id = name + '-list'; 
    groupName.innerHTML = (name);
    newGroup.appendChild(groupName);
    dynamicList.appendChild(newGroup);
}

function drawListItem(item, type) {
    var listGroup = document.getElementById(type + '-list');
    var listItem = document.createElement('li');

    listItem.innerHTML = (item);
    listGroup.appendChild(listItem);
}

function processInput(newItem, category) {
    // confirm text input is not blank
    if (newItem !== '') {
        storeGroup(category);
        storeItem(newItem, category);
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
        //console.log('groceryList = ', groceryList);
        event.preventDefault();
    });

    sortLists();
}

init();