// Parte I
// 🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
// 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()

// 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
const pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa.nome = 'Luna';
pessoa.idade = 19;
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

// 🚀 Modifique a variável para que não ocorra Erro;
let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);

// 🚀 Modifique as concatenações para template literals.
const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);

function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

// 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;
// 🚀 Transforme a função numeroAleatorio em uma arrow function;
const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

// 🚀 Transforme a função hello em uma arrow function;
const hello = nome => `Olá, ${nome}!`;
let nome = 'Ivan';
console.log(hello(nome));

// 🚀 Transforme a função nomeCompleto em uma arrow function;
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

// 🚀 Altere a expressão if/else utilizando ternary operator;
let speed = 90;
const speedCar = (speed) => speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
console.log(speedCar(speed));

//Bônus
// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
//// O nome da função deverá ser substituaX;
//// A função deverá receber um nome por parâmetro;
//// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
//// A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
//// Parâmetro: ‘Bebeto’
//// Retorno: ‘Tryber Bebeto aqui!’
//// Spoiler: O método split() pode ser utilizado de diferentes maneiras, como para separar as palavras de um texto.

const substituaX = nome => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  fraseArray[1] = nome;
  return fraseArray.join(' ');
}
// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
//// O nome da função deverá ser minhasSkills;
//// A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
//// Declare dentro da função uma variável com o nome skills, do tipo const;
//// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
//// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
//// Tryber Bebeto aqui!
//// Minhas três principais habilidades são:
//// JavaScript
//// HTML
//// CSS
const minhasSkills = func => {
  const skills = ['Javascript', 'HTML', 'CSS'];
  let resultado = `${func}\nMinhas três principais habilidades são:`;
  for (skill of skills) {
    resultado += `\n- ${skill}`
  }
  return resultado;
}
console.log(minhasSkills(substituaX('Didi Mocó')));