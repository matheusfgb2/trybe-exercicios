// let player  = {
//     firstName: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2,
//          silver: 3 },
// };

// console.log('A jogadora ' + player.firstName + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log('A jogadora ' + player.firstName + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes, nos anos de: ' + player['bestInTheWorld']);

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata ')

// //

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (n4me in names) {
//   console.log("Olá " + names[n4me]);
// }

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (cars in car) {
//   console.log(cars, car[cars]);
// }

// /// 🚀 Exercícios - objetos e for/in
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
// console.log(`O livro de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

// leitor.livrosFavoritos.push({
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// });
// console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);

/// Exercícios - bônus
const romanToNumber = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
}
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
const oddRoman = (string) => {
  let currentNumber = 0;
  for (index = 0; index < (string.length + 1) / 2; index -= 1) {
    let firstNumber = romanToNumber[string[index]];
    let secondNumber = romanToNumber[string[index + 1]];
    if (secondNumber === undefined) {
      
    }
  }
}

const convertSingleRomanToNumber = (string) => {
  if (string.length === 1) {
    return romanToNumber[string];
  }
  if (string.length % 2 !== 0) {
    return oddRoman(string);
  }
  let currentNumber = 0;
  for (index = 0; index < string.length; index += 1) {
    let firstNumber = romanToNumber[string[index]];
    let secondNumber = romanToNumber[string[index + 1]];
    if (secondNumber !== undefined) {
      if (firstNumber < secondNumber){
        currentNumber += secondNumber - firstNumber;
      } else {
        currentNumber += firstNumber + secondNumber;
      }
    }
  }
  return currentNumber;
  }

const convertArrayRomanToNumber = (array) => {
  let newArray = [];
  for (let indexArr = 0; indexArr < array.length; indexArr += 1) {
    newArray.push(convertSingleRomanToNumber(array[indexArr]));
  }
  return newArray;
}
console.log(convertArrayRomanToNumber(['I', 'II', 'IX', 'CM', 'III']));