const capitalize = require('./capitalize.js');

test('"hola" should return "Hola"', ()=> {
//Arrange
const str = "hola";
//Act
const capitali = capitalize(str);
//Asset
expect(capitali).toMatch(/Hola/)
})