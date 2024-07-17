//fetch from this url - no key required
const url = `https://open.er-api.com/v6/latest/USD`;
//create an object that you can add exchange rates to, once the data is fetched
const Currencies = {};
let countries = ["AUD", "CAD", "EUR", "GBP"];
let exchangeBoard = document.getElementById("exchangeBoard");

//fetch json data
async function getData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const currencies = await response.json();
    console.log(currencies);

    Currencies.AUD = currencies.rates.AUD;
    Currencies.CAD = currencies.rates.CAD;
    Currencies.EUR = currencies.rates.EUR;
    Currencies.GBP = currencies.rates.GBP;
    // Currencies.lastUpdate = currencies.time_last_update_unix;
    // Currencies.nextUpdate = currencies.time_next_update_unix;

    setEntry(countries);
  } catch (error) {
    console.error(error.message);
  }
}

console.log(Currencies);

getData();

//constructing the currency board

function setEntry(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === "AUD") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${Currencies.AUD}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "CAD") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${Currencies.CAD}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "EUR") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${Currencies.EUR}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "GBP") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${Currencies.GBP}</span>`;
      exchangeBoard.appendChild(newLi);
    }
  }
}
