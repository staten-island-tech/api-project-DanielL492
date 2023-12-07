import "../css/style.css";

const URL = `https://ch.tetr.io/api/`; 

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
  }
}

getData(URL);

//fish