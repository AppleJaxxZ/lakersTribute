require("dotenv").config();

let meow = document.getElementById("answer");
// const players = [
//   {
//     playerName: "Kobe Bryant",
//     points: 33643,
//     rebounds: 7047,
//     assists: 6306,
//     steals: 1944,
//     blocks: 640,
//     mvps: 1,
//   },
//   {
//     playerName: "Magic Johnson",
//     points: 17707,
//     rebounds: 6559,
//     assists: 10141,
//     steals: 1724,
//     blocks: 374,
//     mvps: 3,
//   },
//   {
//     playerName: "Kareem Abdul Jabbar",
//     points: 38387,
//     rebounds: 17440,
//     assists: 5660,
//     steals: 1160,
//     blocks: 3189,
//     mvps: 6,
//   },
//   {
//     playerName: "Shaquille O'Neal",
//     points: 28596,
//     rebounds: 13099,
//     assists: 3026,
//     steals: 739,
//     blocks: 2732,
//     mvps: 1,
//   },
//   {
//     playerName: "James Worthy",
//     points: 16320,
//     rebounds: 4708,
//     assists: 2791,
//     steals: 1041,
//     blocks: 624,
//     mvps: 0,
//   },
//   {
//     playerName: "Jerry West",
//     points: 25192,
//     rebounds: 5366,
//     assists: 6238,
//     steals: 81,
//     blocks: 23,
//     mvps: 1,
//   },
// ];

// console.log(players[0]);

var options = {
  method: "GET",
  url: "https://api-nba-v1.p.rapidapi.com/players/teamId/17",
  headers: {
    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
    "x-rapidapi-key": process.env.API_KEY,
  },
};

const getPlayers = () => {
  axios
    .request(options)
    .then((response) => {
      return response.data.api.players;
    })
    .then((data) => {
      let newData = data.filter((player) => player.leagues.standard.active > 0);
      console.log(newData);
      const html = newData
        .map((player) => {
          return ` <p> Name: ${player.firstName}-${player.lastName}</p>`;
        })
        .join("");
      meow.insertAdjacentHTML("afterbegin", html);
    })
    .catch((err) => console.log(err));
};

getPlayers();
