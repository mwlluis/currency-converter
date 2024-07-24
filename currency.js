//fetch from this url - no key required
const url = `https://open.er-api.com/v6/latest/USD`;
//create an object that you can add exchange rates to, once the data is fetched
const Currencies = {};

let countries = [];
let countryCurrencyValues = [];
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

    // //selects out the exchange rates from the json object, so this is good currency key: exchange rate
    let Currencies = currencies.rates;

    let allCountriesArrKeys = Object.keys(Currencies);
    let allCountriesArrValues = Object.values(Currencies);

    allCountriesArrKeys.forEach((element) => countries.push(element));
    allCountriesArrValues.forEach((element) =>
      countryCurrencyValues.push(element)
    );

    Currencies.lastUpdate = currencies.time_last_update_unix;
    Currencies.nextUpdate = currencies.time_next_update_unix;

    Currencies.lastUpdateUtc = currencies.time_last_update_utc;
    Currencies.nextUpdateUtc = currencies.time_next_update_utc;

    setEntry(countries, allCountriesArrValues);
  } catch (error) {
    console.error(error.message);
  }
}

getData();

//constructing the currency board, this doesn't run duplicates because it's not an event-driven action

function setEntry(array, array2) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === "ARS") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${array2[i].toFixed(2)}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "AUD") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${array2[i].toFixed(2)}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "BRL") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${array2[i].toFixed(2)}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "BZL") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${array2[i].toFixed(2)}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "CAD") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${array2[i].toFixed(2)}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "EUR") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${array2[i].toFixed(2)}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "GBP") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${array2[i].toFixed(2)}</span>`;
      exchangeBoard.appendChild(newLi);
    } else if (array[i] === "ZAR") {
      const newLi = document.createElement("li");
      newLi.setAttribute("id", array[i]);
      newLi.innerHTML = `<span>${array[i]}: ${array2[i].toFixed(2)}</span>`;
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
  //dollar value is working
  let dollarValue = document.getElementById("dollarValue").value;

  //this selects the ul that will display the converted currency amounts
  let resultsList = document.getElementById("resultsList");
  //need to clear out the previously posted conversions
  function objArrConverter(array) {
    //does a mapped array return? how to pass in an object into a function
    let objCurrToArrMapped = array.map((x) =>
      Number((x * dollarValue).toFixed(2))
    );
    return objCurrToArrMapped;
  }
  //this clears the previous conversions so no duplication
  resultsList.innerHTML = "";

  let convHeading = document.getElementById("results").firstElementChild;
  //ok so I need to fix objCurrToArrMapped
  convHeading.textContent = `$${dollarValue} Dollars in Foreign Currency`;
  //so pass in the objCurrToArrMapped to the function
  function setResults(array1, array2, objArrConverter) {
    let array3 = objArrConverter(array2);

    for (i = 0; i < array1.length; i++) {
      if (array1[i] === "ARS") {
        const newConLi = document.createElement("li");
        // newConLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array3[i]} </span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "AUD") {
        const newConLi = document.createElement("li");
        // newConLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array3[i]}</span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "BRL") {
        const newConLi = document.createElement("li");
        // newConLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array3[i]}</span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "CAD") {
        const newConLi = document.createElement("li");
        // newConLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array3[i]}</span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "EUR") {
        const newConLi = document.createElement("li");
        // newConLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array3[i]}</span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "GBP") {
        const newConLi = document.createElement("li");
        // newConLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array3[i]}</span>`;
        resultsList.appendChild(newConLi);
      } else if (array1[i] === "ZAR") {
        const newConLi = document.createElement("li");
        // newConLi.setAttribute("id", array[i]);
        newConLi.innerHTML = `<span>${array1[i]}: ${array3[i]}</span>`;
        resultsList.appendChild(newConLi);
      }
    }
  }

  setResults(countries, countryCurrencyValues, objArrConverter);
  document.getElementById("dollarValue").value = "";
});
