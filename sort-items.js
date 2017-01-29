function clearHTML() {
    document.getElementById('list-display').innerHTML = '';
}

function redrawHTML() {
    clearHTML();
    for (var i=0; i < groceryList.length; i++) {
        var groupName = groceryList[i][0];
        drawGroup(groupName);

        var count = 1; // start at 1 to skip group name
        while (count < groceryList[i].length) {
            var newItem = groceryList[i][count];
            drawListItem(newItem, groupName);
            count++;
        }
    }
}

function sortGroups() {
    groceryList.sort();
    redrawHTML();
}

function sortItems() {
    console.log('sortItemsButton clicked');
    for (var i=0; i < groceryList.length; i++) {
        // isolate group name (always first in array)
        var groupName = groceryList[i].shift();
        // sort items
        groceryList[i].sort();
        // add group name back
        groceryList[i].unshift(groupName);
    }
    redrawHTML();
}

function sortLists() {
    var sortGroupsButton = document.getElementById('sort-groups');
    var sortItemsButton = document.getElementById('sort-items');

    sortGroupsButton.addEventListener('click', sortGroups);
    sortItemsButton.addEventListener('click', sortItems);
}