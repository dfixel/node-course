/* eslint one-var: 0 */

const birds = [
  {
    name: "Hornero",
    family: "Furnaridae"
  },
  {
    name: "Junquero",
    family: "Furnaridae"
  },
  {
    name: "Tachurí Siete Colores",
    family: "Tirannydae"
  },
  {
    name: "Piojito Común",
    family: "Tirannydae"
  },
  {
    name: "Benteveo Común",
    family: "Tirannydae"
  },
  {
    name: "Zorzal Colorado",
    family: "Turdidae"
  }
];

// Imprimir lo siguiente:
// 1. Array de nombres de todos los pájaros ordenados alfabéticamente.
const orderedBirds = birds.sort((bird1, bird2) => bird1.name > bird2.name);
orderedBirds.forEach((n) => console.log(n.name));
// 2. Obtener el objeto completo del que tiene nombre "Zorzal Colorado".
const uniqueZorzal = birds.find((n) => n.name === "Zorzal Colorado");
console.log(uniqueZorzal);
// 3. Array de nombres de los pájaros de la familia "Tirannydae".
const tirannydaes = birds.filter((n) => n.family === "Tirannydae");
tirannydaes.forEach((n) => console.log(n.name));
// 4. Cantidad de pájaros de la familia "Furnaridae".
const amountFurnaridae = birds.reduce((_total, current) => {
  return _total + (current.family === "Furnaridae" ? 1 : 0);
}, 0);
console.log(amountFurnaridae);