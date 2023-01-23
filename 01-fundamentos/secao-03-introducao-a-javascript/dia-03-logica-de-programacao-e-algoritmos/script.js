//exercicio 1: crie um algoritmo que imprima na tela o fatorial de 10
let number = 10;
let numberFact = 1;
for (index = 1; index <= number; index += 1) {
    numberFact *= index;
}
console.log(numberFact);

//exercicio 2: Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.
const word = "tilápia";
let invertedWord = "";
for (let index = 0; index < word.length; index += 1) {
  invertedWord += word[word.length - 1 - index];
}
console.log(invertedWord);

//exercicio 3: Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let greatestWord = '';
let tiniestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index] != array[index + 1] && array[index].length > greatestWord.length) {
    greatestWord = array[index];
  }
  if (array[index] != array[index + 1] && array[index].length < tiniestWord.length) {
    tiniestWord = array[index];
  }
}
console.log(greatestWord);
console.log(tiniestWord);

//exercicio 4: Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let greatestPrime = 0;
for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    greatestPrime = currentNumber;
  }
}
console.log(greatestPrime);

//bonus 1: Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 8;
let fileira = '';
if (n > 1) {
  for (let index = 0; index < n; index += 1) {
    while (fileira.length !== n) {
      fileira += '*';
    }
    console.log(fileira);
  }
} else {
  console.log('Insira um valor maior do que 1.');
}
console.log('');
fileira = '';

//bonus 2: Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
if (n > 1) {
  for (let index = 0; index < n; index += 1) {
      fileira += '*';
      console.log(fileira);
  }
} else {
  console.log('Insira um valor maior do que 1.');
}
console.log('');
fileira = '';

//bonus 3: Agora inverta o lado do triângulo.
for (let index = 1; index < n; index += 1) {
  let numeroEspacos = n - index;
  for (let index1 = 0; index1 < numeroEspacos; index1 += 1) {
    fileira += ' ';
  }
  for (let index3 = 1; index3 <= index; index3 += 1) {
    fileira += '*'
  }
  console.log(fileira);
  fileira = '';
}
for (index = 0; index < n; index += 1) {
  fileira += '*';
}
console.log(fileira);