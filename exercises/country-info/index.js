function getByCompare(cb, comparador) {
  // write your code here!
  const fs = require("fs");
  fs.readFile(`${__dirname}/countries.json`, (err, data) => {
    if (err) { 
      cb(err, null);
    } else {
      try {
        const paises = JSON.parse(data),
          res = paises.find(comparador);
        cb(null, res);
      } catch (e) {
        cb(e, null);
      }
    }
  });
}

module.exports = {

  getCountryInfo(code, cb) {
    const comparador = (c) => {
      return c.code === code;
    };

    getByCompare(cb, comparador);
  },

  getCountryInfoByName(name, cb) {
    const comparador = (c) => {
      return c.name === name;
    };
    return getByCompare(cb, comparador);
  }
};


