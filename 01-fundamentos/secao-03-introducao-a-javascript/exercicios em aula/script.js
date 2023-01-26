//// 25/01/23 - Dia 3.3 -  Lógica de Programação e Algoritmos

// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:
let sum = 0;
for (let index = 1; index <= 50; index += 1) {
  sum += index;
}; 
console.log("A soma total de 1 a 50 é:", sum);
//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let divisionCounter = 0;
for (let index = 2; index <= 150; index += 1) {
  if (index % 3 === 0) {
    divisionCounter += 1;
  }
}
if (divisionCounter === 50) {
  console.log('mensagem secreta')
};
  console.log(divisionCounter);
// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
let joKenPo = ['pedra', 'papel', 'tesoura'];
let player1 = joKenPo[Math.floor(Math.random() * 3)];
let player2 = joKenPo[Math.floor(Math.random() * 3)];

if (player1 === player2) {
  console.log('Player 1:', player1, 'Player 2:', player2);
  console.log('A tie');
} else if ((player1 === 'pedra' && player2 === 'tesoura') || (player1 === 'tesoura' && player2 === 'papel')) {
  console.log('Player 1:', player1, 'Player 2:', player2);
  console.log('Player 1 wins');
} else {
  console.log('Player 1:', player1, 'Player 2:', player2);
  console.log('Player 2 wins');
};
//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
let maiorDeIdade = 18;
let idade = Math.floor(Math.random() * 100);
// console.log(idade);
// if (idade >= maiorDeIdade) {
//   console.log('A pessoa é maior de idade.');
// } else {
//   console.log('A pessoa é menor de idade.');
// }
let idadeMaior = idade >= maiorDeIdade ? console.log('A pessoa é maior de idade.'):console.log('A pessoa é menor de idade.');


// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let pessoas = [['Flávio', 36], ['Noel', 45], ['Carol', 24]];
maisNova = pessoas[0];
for (i = 0; i < pessoas.length; i += 1){
    if (maisNova[1] > pessoas[i][1]){
        maisNova = pessoas[i]
    }
}
console.log('A pessoa mais nova é ' + maisNova[0] + ' com idade ' + maisNova[1])

//if ()