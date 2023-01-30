let player  = {
    firstName: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2,
         silver: 3 },
};

console.log('A jogadora ' + player.firstName + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log('A jogadora ' + player.firstName + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes, nos anos de: ' + player['bestInTheWorld']);

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata ')

//

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (n4me in names) {
  console.log("Olá " + names[n4me]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (cars in car) {
  console.log(cars, car[cars]);
}

/// 🚀 Exercícios - objetos e for/in
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log(`O livro de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);

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

const convertRomanToNumber = (array) => {
  let numberSum = 0;
  let numberSub = 0;
  let newArray = [];
  for (indexArr = 0; indexArr < array.length; indexArr += 1) {
    for (indexStr = 0; indexStr < array[indexArr].length; indexStr += 1) {
      if (romanToNumber[indexArr][indexStr] === 'I')
      numberSum += romanToNumber[array[indexArr][indexStr]];
    }
    newArray.push(numberSum);
    numberSum = 0;
  }
  return console.log(newArray);
}
convertRomanToNumber(['I', 'II', 'III', 'XVIII', 'MV', 'VII']);