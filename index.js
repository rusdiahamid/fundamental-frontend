const { coffeeStock, isCoffeeMakerReady } = require('./state.js');

console.log(coffeeStock);
console.log(isCoffeeMakerReady);

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log('Kopi berhasil dibuat!');
  } else {
    console.log('Biji kopi habis!');
  }
};

makeCoffee('robusta', 80);
