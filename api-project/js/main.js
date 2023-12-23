//const URL = `https://www.cheapshark.com/api/1.0/deals?&upperPrice=15`; 
import { DOMSelectors } from "./dom";

DOMSelectors.top10btn.addEventListener("click", function(){
  let URL = `https://www.cheapshark.com/api/1.0/deals?&pageSize=10`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data)
      function insert(arr) {
        arr.forEach((data) => DOMSelectors.container.insertAdjacentHTML("beforeend",
        `<div class="flexcontainer">
          <div class="card">
            <h4 class="name">${data.title}</h1>
            <img src="${data.thumb}" alt="Image" class="card-img"/> <br>
            <h5 class="price"> Sale Price: ${data.salePrice}</h5>
            <h6 id="${data.storeID}">Store: ${data.storeID}</h3>
          </div>
        </div>`
        ))}
      clearcards();
      insert(data);
    }
    catch (error) {
      console.log("error");
      document.querySelector("h3").textContent = "Error";
    }
  }
  getData(URL);
})

function clearcards() {
  const card = document.querySelectorAll(".card");
  card.forEach((name) => name.remove());
};

function makedropdown() {
  DOMSelectors.dropcontainer.insertAdjacentHTML("beforeend", 
  `<div class="dropcontainer">
    <label for=stores>Search for Deals in Specific Stores:</label>
    <select name="goofyahname" id="stores">
      <option value="0">None</option>
      <option value="1">Steam</option>
      <option value="2">GamersGate</option>
      <option value="3">GreenManGaming</option>
      <option value="4">Amazon</option>
      <option value="5">Gamestop</option>
      <option value="6">Direct2Drive</option>
      <option value="7">GOG</option>
      <option value="8">Origin</option>
      <option value="9">Get Games</option>
      <option value="10">Shiny Loot</option>
      <option value="11">Humble Store</option>
      <option value="12">Desura</option>
      <option value="13">Uplay</option>
      <option value="14">IndieGameStand</option>
      <option value="15">Fanatical</option>
      <option value="16">Gamesrocket</option>
      <option value="17">Games Republic</option>
      <option value="18">SilaGames</option>
      <option value="19">Playfield</option>
      <option value="20">ImperialGames</option>
      <option value="21">WinGameStore</option>
      <option value="22">FunStockDigital</option>
      <option value="23">GameBillet</option>
      <option value="24">Voidu</option>
      <option value="25">Epic Games Store</option>
      <option value="26">Razer Game Store</option>
      <option value="27">Gamesplanet</option>
      <option value="28">Gamesload</option>
      <option value="29">2Game</option>
      <option value="30">IndieGala</option>
      <option value="31">Blizzard Shop</option>
      <option value="32">AllYouPlay</option>
      <option value="33">DLGamer</option>
      <option value="34">Noctre</option>
      <option value="35">DreamGame</option>
  </select>
</div>`
)}

/*document.querySelector("#stores").addEventListener("change", function(){
  let URL = "";
  async function getStores() {

  }
})*/

makedropdown()





//cheap shark  & MapQuest to locate store