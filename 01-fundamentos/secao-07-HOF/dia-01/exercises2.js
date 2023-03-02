const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorne o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonAttack = () => Math.floor(Math.random() * (dragon.strength - 15) + 15);
// console.log(dragonAttack());

// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorAttack = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
// console.log(warriorAttack());

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const mageAttack = () => {
  const manaBool = mage.mana < 15;
  const damage = manaBool ? 'Não possui mana suficiente' : Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
  const spentMana = manaBool ? 0 : 15;
  return {damage, spentMana};
}
// console.log(mageAttack());


// Crie a primeira HOF que compõe o objeto gameActions.
// Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.

// Crie a segunda HOF que compõe o objeto gameActions.
// Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damage e mana do mage.

// Crie a terceira HOF que compõe o objeto gameActions.
// Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro.
const gameActions = {
  warriorTurn: (callback) => {
    const damage = callback();
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  mageTurn: (callback) => {
    const damage = callback().damage;
    const manaLeft = callback().spentMana;
    dragon.healthPoints -= damage;
    mage.damage = damage;
    mage.mana -= manaLeft;
  },
  dragonTurn: (callback) => {
    const damage = callback();
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
    dragon.damage = damage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());
