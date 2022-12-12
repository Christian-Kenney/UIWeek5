var options = [
    recentLeagues = ['Recent League 1','Recent League 2','Recent League 3', 'Recent League 4', 'Recent League 5'],
    recentMatches = ['Recent Match 1', 'Recent Match 2', 'Recent Match 3', 'Recent Match 4', 'Recent Match 5']
];

function makeUL(array) {
    // Create the list element:

    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}


// Add the contents of options[0] to #foo:
document.getElementById('listDiv').appendChild(makeUL(options[0]));
document.getElementById('topRightBox').appendChild(makeUL(options[1]));

