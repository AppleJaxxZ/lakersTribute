const players = [
  {
    playerName: "Kobe Bryant",
    points: 33643,
    rebounds: 7047,
    assists: 6306,
    steals: 1944,
    blocks: 640,
    mvps: 1,
  },
  {
    playerName: "Magic Johnson",
    points: 17707,
    rebounds: 6559,
    assists: 10141,
    steals: 1724,
    blocks: 374,
    mvps: 3,
  },
  {
    playerName: "Kareem Abdul Jabbar",
    points: 38387,
    rebounds: 17440,
    assists: 5660,
    steals: 1160,
    blocks: 3189,
    mvps: 6,
  },
  {
    playerName: "Shaquille O'Neal",
    points: 28596,
    rebounds: 13099,
    assists: 3026,
    steals: 739,
    blocks: 2732,
    mvps: 1,
  },
  {
    playerName: "James Worthy",
    points: 16320,
    rebounds: 4708,
    assists: 2791,
    steals: 1041,
    blocks: 624,
    mvps: 0,
  },
  {
    playerName: "Jerry West",
    points: 25192,
    rebounds: 5366,
    assists: 6238,
    steals: 81,
    blocks: 23,
    mvps: 1,
  },
];

const kobe = document.getElementById("stats-1");

kobe.innerHTML = `
<p class="text-gold"><span class="text-white">Points: </span> ${players[0].points}</p>
<p class="text-gold"><span class="text-white">Rebounds:</span> ${players[0].rebounds}</p>
<p class="text-gold"><span class="text-white">Assists:</span> ${players[0].assists}</p>
<p class="text-gold"><span class="text-white">Steals:</span> ${players[0].steals}</p>
<p class="text-gold"><span class="text-white">Blocks:</span> ${players[0].blocks}</p>
`;

const magic = document.getElementById("stats-2");

magic.innerHTML = `
<p class="text-gold"><span class="text-white">Points: </span> ${players[1].points}</p>
<p class="text-gold"><span class="text-white">Rebounds:</span> ${players[1].rebounds}</p>
<p class="text-gold"><span class="text-white">Assists:</span> ${players[1].assists}</p>
<p class="text-gold"><span class="text-white">Steals:</span> ${players[1].steals}</p>
<p class="text-gold"><span class="text-white">Blocks:</span> ${players[1].blocks}</p>
`;

const kareem = document.getElementById("stats-3");

kareem.innerHTML = `
<p class="text-gold"><span class="text-white">Points: </span> ${players[2].points}</p>
<p class="text-gold"><span class="text-white">Rebounds:</span> ${players[2].rebounds}</p>
<p class="text-gold"><span class="text-white">Assists:</span> ${players[2].assists}</p>
<p class="text-gold"><span class="text-white">Steals:</span> ${players[2].steals}</p>
<p class="text-gold"><span class="text-white">Blocks:</span> ${players[2].blocks}</p>
`;

const shaq = document.getElementById("stats-4");

shaq.innerHTML = `
<p class="text-gold"><span class="text-white">Points: </span> ${players[3].points}</p>
<p class="text-gold"><span class="text-white">Rebounds:</span> ${players[3].rebounds}</p>
<p class="text-gold"><span class="text-white">Assists:</span> ${players[3].assists}</p>
<p class="text-gold"><span class="text-white">Steals:</span> ${players[3].steals}</p>
<p class="text-gold"><span class="text-white">Blocks:</span> ${players[3].blocks}</p>
`;

const worthy = document.getElementById("stats-5");

worthy.innerHTML = `
<p class="text-gold"><span class="text-white">Points: </span> ${players[4].points}</p>
<p class="text-gold"><span class="text-white">Rebounds:</span> ${players[4].rebounds}</p>
<p class="text-gold"><span class="text-white">Assists:</span> ${players[4].assists}</p>
<p class="text-gold"><span class="text-white">Steals:</span> ${players[4].steals}</p>
<p class="text-gold"><span class="text-white">Blocks:</span> ${players[4].blocks}</p>
`;

const west = document.getElementById("stats-6");

west.innerHTML = `
<p class="text-gold"><span class="text-white">Points: </span> ${players[5].points}</p>
<p class="text-gold"><span class="text-white">Rebounds:</span> ${players[5].rebounds}</p>
<p class="text-gold"><span class="text-white">Assists:</span> ${players[5].assists}</p>
<p class="text-gold"><span class="text-white">Steals:</span> ${players[5].steals}</p>
<p class="text-gold"><span class="text-white">Blocks:</span> ${players[5].blocks}</p>
`;
