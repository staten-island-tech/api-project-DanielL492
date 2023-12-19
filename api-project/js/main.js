//const URL = `https://www.cheapshark.com/api/1.0/deals?&upperPrice=15`; 

const URL = `https://www.cheapshark.com/api/1.0/deals?&pageSize=1&upperPrice=15`;
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    document.querySelector("h3").textContent = data[0].title;
  }
  catch (error) {
    console.log("error");
    document.querySelector("h3").textContent = "Error";
  }
}

getData(URL);




//cheap shark  & MapQuest to locate store