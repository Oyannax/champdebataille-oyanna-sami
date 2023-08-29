let players = [
    {
        name: "Thomas",
        pv: 50,
        xp: 8,
        weapon: 6,
        shield: 7
    },
    {
        name: "Brice",
        pv: 50,
        xp: 7,
        weapon: 8,
        shield: 4
    },
    {
        name : "Florian",
        pv: 50,
        xp: 10,
        weapon: 5,
        shield: 8
    },
    {
        name : "Aurelien",
        pv: 50,
        xp: 6,
        weapon: 9,
        shield: 8
    }
]


function getRandomPlayer() {
    let defender;
    let attacker;
    while (attacker === undefined || players[attacker].pv <= 0) {
    attacker = Math.floor(Math.random() * players.length );
    }
    while (attacker === defender || defender === undefined || players[defender].pv <= 0) {
        defender = Math.floor(Math.random() * players.length);
    }
    return [players[attacker], players[defender]];
}

console.table(getRandomPlayer());

/*function getBattle(){
    getRandomPlayer();
    let attackerScore = players[attacker].xp + Math.floor(Math.random() * (players[attacker].weapon + 1));
    let defenderScore = players[defender].xp + Math.floor(Math.random() * (players[defender].shield + 1));
    if (attackerScore > defenderScore && players[defender].pv > 0){
        players[defender].pv -= attackerScore;
        return `Le joueur ${players[attacker].name} a attaqué avec un score de ${attackerScore}. ${players[defender].name} s'est défendu avec un score de ${defenderScore}. ${players[attacker].name} a gagné le combat!`;
    }
    else if (players[defender].pv <= 0){
        return `Le joueur ${players[attacker].name} a attaqué avec un score de ${attackerScore}. ${players[defender].name} s'est défendu avec un score de ${defenderScore}. ${players[attacker].name} a gagné le combat et le joueur ${players[defender].name} est mort!`;
    }
    return `Le joueur ${players[attacker].name} a attaqué avec un score de ${attackerScore}. ${players[defender].name} s'est défendu avec un score de ${defenderScore}. ${players[attacker].name} a perdu le combat!`;
}
*/