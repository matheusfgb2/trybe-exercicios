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

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function numbersAddition (a, b) {
  a = 11;
  b = 22;
  return a + b;
}
function numbersSubtraction (a, b) {
  a = 11;
  b = 22;
  return a - b;
}
function numbersMultiply (a, b) {
  a = 11;
  b = 22;
  return a * b;
}
function numbersDivision (a, b) {
  a = 11;
  b = 22;
  return a / b;
}
function numbersModulus (a, b) {
  a = 11;
  b = 22;
  return a % b;
}

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
function greatestNumber (a, b) {
  a = 13;
  b = 23;
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "equal";
  }
}
// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
function greatestOf3 (a, b, c) {
  a = 2;
  b = 9;
  c = 3;
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    return "insert 3 different numbers";
  }
}
// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
function isPositiveorNegative (n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
function areTriangleAngle (a, b, c) {
  if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number') {
    return 'insert only numbers';
  } else if (a < 0 || b < 0 || c < 0) {
    return 'error: one of the angles is invalid. insert only positive integers';
  } else if (a + b + c === 180) {
    return true;
  } else {
    return false;
  }
}

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.