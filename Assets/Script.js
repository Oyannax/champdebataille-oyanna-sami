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
    let attacker = Math.floor(Math.random() * players.length );
    while (attacker === defender || defender === undefined){
        defender = Math.floor(Math.random() * players.length);
    }
    return [players[attacker], players[defender]];
}