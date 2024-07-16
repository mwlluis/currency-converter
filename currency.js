const clave = "cur_live_1FdRL5JM5ABwJGoc24XBAbFcCzePGCpLTR8maXNi";
const url = `https://api.currencyapi.com/v3/latest?apikey=${clave}`;

async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const currencies = await response.json();
    let exchanges = currencies.data;

    // console.log(Object.keys(exchanges));

    function markets(set) {
      if ("AUD" in set) {
        console.log(set.AUD);
      } else if ("CAN" in set) {
        console.log(set.CAN);
      }
    }
    markets(exchanges);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
