var options = [
    openLeagues = ['Open League 1','Open League 2', 'Open League 3', 'Open League 4', 'Open League 5'],
    recentLeagues = ['Recent League 1','Recent League 2','Recent League 3', 'Recent League 4', 'Recent League 5'],
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
document.getElementById('openLeaguesDiv').appendChild(makeUL(options[0]));
document.getElementById('recentLeaguesDiv').appendChild(makeUL(options[1]));
document.getElementById('newDiv').appendChild(makeUL(options[2]));
