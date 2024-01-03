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
          </div>
        </div>`
        ))}
      clearcards();
      insert(data);
    }
    catch (error) {
      console.log("error");
      document.querySelector("h3").textContent = "Error";
    }}
    getData(URL);
  })
  /*async function getStore(brlr) {
    try {
      const response = await fetch(brlr);
      const data = await response.json();
      console.log(data)
      function makeidname(data) {
        data.forEach((arr) => function (){
          let storeID = arr.storeName.value;
      })}
      makeidname(data);
    }
    catch (error) {
      console.log("error");
      document.querySelector("h3").textContent = "Error";
    }
  }}
  let BRL = `https://www.cheapshark.com/api/1.0/stores`;
  //getStore(BRL);
  console.log(BRL);  <h6 id="${storeID}">Store: ${storeID}</h3>*/

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
      <option value="7">GOG</option>
      <option value="8">Origin</option>
      <option value="10">Shiny Loot</option>
      <option value="11">Humble Store</option>
      <option value="12">Desura</option>
      <option value="13">Uplay</option>
      <option value="14">IndieGameStand</option>
      <option value="15">Fanatical</option>
      <option value="21">WinGameStore</option>
      <option value="23">GameBillet</option>
      <option value="24">Voidu</option>
      <option value="25">Epic Games Store</option>
      <option value="26">Razer Game Store</option>
      <option value="27">Gamesplanet</option>
      <option value="28">Gamesload</option>
      <option value="29">2Game</option>
      <option value="30">IndieGala</option>
      <option value="31">Blizzard Shop</option>
      <option value="33">DLGamer</option>
      <option value="34">Noctre</option>
      <option value="35">DreamGame</option>
  </select>
</div>`
)}

makedropdown()

document.querySelector("#stores").addEventListener("change", function(){
  let URL = `https://www.cheapshark.com/api/1.0/deals?storeID=${document.querySelector("#stores").value}`;
  async function getStores(URL) {
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
          </div>
        </div>`
        ))
        if (arr.length == 0) {
          document.querySelector("h5").textContent = "No Deals Found";
        }
      }
      clearcards();
      insert(data);
    }
    catch (error) {
      console.log("error");
      document.querySelector("h4").textContent = "Error";
    }}
    getStores(URL);
})






//cheap shark  & MapQuest to locate store