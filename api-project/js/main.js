//const URL = `https://www.cheapshark.com/api/1.0/deals?&upperPrice=15`; 
const URL = `https://www.cheapshark.com/api/1.0/deals?&pageSize=15&upperPrice=15`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    document.querySelector("h3").textContent = data.title;
  }
  catch (error) {
  }
}

getData(URL);

//cheap shark  & MapQuest to locate store