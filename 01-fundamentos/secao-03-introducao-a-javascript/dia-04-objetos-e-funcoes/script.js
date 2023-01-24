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