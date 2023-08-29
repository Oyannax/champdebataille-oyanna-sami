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
        xp: 9,
        weapon: 5,
        shield: 7
    },
    {
        name : "Aurelien",
        pv: 50,
        xp: 6,
        weapon: 9,
        shield: 8
    }
]

// Fonction pour avoir 2 joueurs aléatoire
function getRandomPlayer() {
    let defender;
    let attacker;
    while (attacker === undefined || players[attacker].pv <= 0) {
    attacker = Math.floor(Math.random() * players.length);
    }
    while (attacker === defender || defender === undefined || players[defender].pv <= 0) {
        defender = Math.floor(Math.random() * players.length);
    }
    console.table(players);
    return [players[attacker], players[defender]];
}

// Fonction pour faire combattre les 2 joueurs choisis aléatoirement et obtenir le résumé du combat
function getBattle(){
    let fighters = getRandomPlayer();
    let defender = fighters[1];
    let attacker = fighters[0];
    let attackerScore = attacker.xp + Math.floor(Math.random() * (attacker.weapon + 1));
    let defenderScore = defender.xp + Math.floor(Math.random() * (defender.shield + 1));
    let result = `Le joueur ${attacker.name} a attaqué avec un score de ${attackerScore}. ${defender.name} s'est défendu avec un score de ${defenderScore}. ${attacker.name} a`;
    if (attackerScore > defenderScore && defender.pv > 0){ 
        defender.pv -= attackerScore;
        if (defender.pv <= 0){
            return `${result} gagné le combat et le joueur ${defender.name} est mort!`;
        }
        return `${result} gagné le combat!`;
    }
    return `${result} perdu le combat!`;
}

// Fonction pour afficher la bataille et afficher le resultat du  gagnant
function displayWar() {
    let death = 0;
    while (death !== 3) {
        console.log(getBattle());
        for (let player in players) {
            if (players[player].pv <= 0){
                players.splice(player, 1);
                death ++
            }
        }
    }
    return `Le grand gagnant est : ${players[0].name}`;
}

console.log(displayWar());