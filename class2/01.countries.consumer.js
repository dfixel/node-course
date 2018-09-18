const countryInfo = require("../exercises/country-info");

// consume here the module!
countryInfo.getCountryInfo("AR", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

countryInfo.getCountryInfoByName("Argentina", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});