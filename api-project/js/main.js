//const URL = `https://www.cheapshark.com/api/1.0/deals?&upperPrice=15`; 

const URL = `https://www.cheapshark.com/api/1.0/random`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    document.querySelector("h3").textContent = data[0].title;
  }
  catch (error) {
  }
}

getData(URL);




//cheap shark  & MapQuest to locate store