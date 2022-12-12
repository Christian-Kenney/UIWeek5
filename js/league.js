var options = [
    teams = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5'],
    matches = ['Match1', 'Match2', 'Match3', 'Match4', 'Match5'],
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
topRightBox
document.getElementById('newDiv').appendChild(makeUL(options[0]));
document.getElementById('topRightBox').appendChild(makeUL(options[2]));
document.getElementById('bottomRightBox').appendChild(makeUL(options[1]));