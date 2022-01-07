let responseData = document.getElementById("response-data");
let searchInput = document.getElementById("search");
let submitBtn = document.getElementById("myBtn");

var options = {
  method: "GET",
  url: "https://api-nba-v1.p.rapidapi.com/players/teamId/17",
  headers: {
    "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
    "x-rapidapi-key": "b1af7dfc76msh1abe2ed72fa32c1p185f53jsnb7f4a76fbec0",
  },
};

const getPlayers = (event) => {
  let savedSearchInput = searchInput.value;
  searchInput.value = "";
  responseData.innerHTML = "";
  event.preventDefault();

  axios
    .request(options)
    .then((response) => {
      return response.data.api.players;
    })
    .then((data) => {
      let newData = data.filter((player) => player.leagues.standard?.active);
      let returnedPlayers = newData.filter((player) =>
        player.lastName.includes(savedSearchInput)
      );
      console.log(returnedPlayers);
      console.log(newData);
      const html =
        returnedPlayers.length > 0
          ? returnedPlayers.map((player) => {
              return ` <h3 class="text-purple"> Name: ${player.firstName} ${
                player.lastName
              }</h3>
              <ol>
          <li><p>DOB: ${
            player.dateOfBirth ? player.dateOfBirth : null
          }</p></li><br/>
          <li><p>Started in NBA: ${player.startNba}</p></li></br>
          <li><p>Jersey: #${player.leagues.standard.jersey}</p></li><br/>
          <li><p>Position: ${player.leagues.standard.pos}</p></li>
          </ol>`;
            })
          : "There are no results that match that last name";
      responseData.insertAdjacentHTML("afterbegin", html);
    })
    .catch((err) => console.log(err));
};

submitBtn.addEventListener("click", getPlayers);
searchInput.addEventListener("input", function () {
  responseData.style.display = "block";
});
