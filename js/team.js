var options = [
    teams = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5'],
    matches = ['League1', 'League2', 'League3', 'League4', 'League5'],
    recentMatches = ['Recent Match 1', 'Recent Match 2', 'Recent Match 3', 'Recent Match 4', 'Recent Match 5']
];

function makeUL(array) {
    // Create the list element:

    var list = document.createElement('div');
    list.appendChild(document.createElement('ul'))

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
document.getElementById('userLeagues1').appendChild(makeUL(options[0]));
document.getElementById('topRightBox').appendChild(makeUL(options[2]));
document.getElementById('bottomRightBox').appendChild(makeUL(options[1]));