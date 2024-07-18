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
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.AUD}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "CAD") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.CAD}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "EUR") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.EUR}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "GBP") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.GBP}</span>`;
      exchangeBoard.appendChild(newLi);
    }
  }
}

//setting up the currency conversion

const conversionBtn = document.getElementById("conversionBtn");

conversionBtn.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("clicked");

  let dollarValue = document.getElementById("dollarValue").value;
  let resultsList = document.getElementById("resultsList");
  let objCurrToArr = Object.values(Currencies);
  let objCurrToArrMapped = objCurrToArr.map((x) => x * dollarValue);

  console.log(dollarValue);

  function setResults(array1, array2) {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] === "AUD") {
        const newConLi = document.createElement("li");
        // newLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array2[i]} </span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "CAD") {
        const newConLi = document.createElement("li");
        // newLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array2[i]}</span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "EUR") {
        const newConLi = document.createElement("li");
        // newLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array2[i]}</span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "GBP") {
        const newConLi = document.createElement("li");
        // newLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array2[i]}</span>`;
        resultsList.appendChild(newConLi);
      }
    }
  }

  setResults(countries, objCurrToArrMapped);
  document.getElementById("dollarValue").value = "";
});
