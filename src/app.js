var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/players/firstName/Kobe',
  headers: {
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
    'x-rapidapi-key': '7d897556d6msh0b1c6bf9dd7b131p1e7512jsn912548d77653'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.api);
}).catch(function (error) {
	console.error(error);
});