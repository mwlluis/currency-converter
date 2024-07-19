//fetch from this url - no key required
const url = `https://open.er-api.com/v6/latest/USD`;
//create an object that you can add exchange rates to, once the data is fetched
const Currencies = {};

//i'm only interested in these currencies for now
let countries = ["ARS", "AUD", "BRL", "CAD", "EUR", "GBP"];

//this selects the element where the currencies will be displayed
let exchangeBoard = document.getElementById("exchangeBoard");

//fetch json data
async function getData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    //returns data as a json object
    const currencies = await response.json();

    Currencies.ARS = currencies.rates.ARS;
    Currencies.AUD = currencies.rates.AUD;
    Currencies.BRL = currencies.rates.BRL;
    Currencies.CAD = currencies.rates.CAD;
    Currencies.EUR = currencies.rates.EUR;
    Currencies.GBP = currencies.rates.GBP;
    // Currencies.lastUpdate = currencies.time_last_update_unix;
    // Currencies.nextUpdate = currencies.time_next_update_unix;

    console.log(currencies);
    console.log(Currencies);
    setEntry(countries);
  } catch (error) {
    console.error(error.message);
  }
}

// console.log(Currencies);

getData();

//constructing the currency board, this doesn't run duplicates because it's not an event-driven action

function setEntry(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === "ARS") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.ARS.toFixed(
        2
      )}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "AUD") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.AUD.toFixed(
        2
      )}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "BRL") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.BRL.toFixed(
        2
      )}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "BZL") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.BZL.toFixed(
        2
      )}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "CAD") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.CAD.toFixed(
        2
      )}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "EUR") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.EUR.toFixed(
        2
      )}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "GBP") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${Currencies.GBP.toFixed(
        2
      )}</span>`;
      exchangeBoard.appendChild(newLi);
    }
  }
}

//setting up the currency conversion
//selecting the button to convert currency
const conversionBtn = document.getElementById("conversionBtn");

//adding on click event listener
conversionBtn.addEventListener("click", function (event) {
  event.preventDefault();

  //this captures the user provided amount in dollars to be converted
  let dollarValue = document.getElementById("dollarValue").value;
  //this selects the ul that will display the converted currency amounts
  let resultsList = document.getElementById("resultsList");
  //need to clear out the previously psoted conversions
  let objCurrToArr = Object.values(Currencies);
  let objCurrToArrMapped = objCurrToArr.map((x) =>
    (x * dollarValue).toFixed(2)
  );

  //this clears the previous conversions so no duplication
  resultsList.innerHTML = "";

  let convHeading = document.getElementById("results").firstElementChild;

  convHeading.textContent = `$${dollarValue} Dollars in Foreign Currency`;

  function setResults(array1, array2) {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] === "ARS") {
        const newConLi = document.createElement("li");
        // newLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array2[i]} </span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "AUD") {
        const newConLi = document.createElement("li");
        // newLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array2[i]}</span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "BRL") {
        const newConLi = document.createElement("li");
        // newLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array2[i]}</span>`;
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
