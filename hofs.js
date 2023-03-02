//FUNÇÃO NOMINADA
function exemploFuncaoNominada (num1, num2){
  return num1 + num2;
}

console.log(exemploFuncaoNominada(10, 20));

//========================================

//FUNÇÃO ANÔNIMA
const exemploFuncaoAnonima = function (num1, num2){
  return num1 + num2;
};

console.log(exemploFuncaoAnonima(5, 4));

//========================================

//ARROW FUNCTION
const arrowFunction = (num1, num2) => num1 + num2;

console.log(arrowFunction(10, 8));

//========================================

//HOFS - HIGHER ORDER FUNCTIONS
const personagens = ['GOKU', 'GOHAN', 'BULMA', 'MESTRE KAME'];

personagens.forEach((personagem) => console.log(`DBZ - ${personagem}`));