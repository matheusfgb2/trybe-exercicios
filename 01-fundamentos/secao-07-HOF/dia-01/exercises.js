// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:
// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;
const createEmployee = (fullName) => {
  const email = fullName.replace(' ', '_').toLowerCase();
  return { fullName, email: `${email}@trybe.com` };
}
// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.
const newEmployees = () => {
  const employees = {
    id1: createEmployee('Pedro Guerra'),
    id2: createEmployee('Luzia Drumond'),
    id3: createEmployee('Carla Paiva'),
  }
  return employees;
};
console.log(newEmployees());

// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const sorteio = (n) => {
  const randomN = Math.floor(Math.random()* 5 + 1);
  const didWin = randomN === n;
  return didWin ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(sorteio(3));

// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const getPoints = (rightAnswers, studentAnswers) => {
  let points = 0;
  rightAnswers.forEach((answer, index) => {
    if (studentAnswers[index] === answer) {
      points += 1;
    } else if (studentAnswers[index] !== 'N.A') {
      points -= 0.5;
    }
  });
  return `Resultado final: ${points} pontos`;
}

const correctExam = (rightAnswers, studentAnswers, callback) => callback(rightAnswers, studentAnswers);

console.log(correctExam(RIGHT_ANSWERS, STUDENT_ANSWERS, getPoints));

// 🚀 Organizando uma biblioteca

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  const findBook = books.find((book) => book.author.birthYear === 1947);
  return findBook.author.name
}
console.log(authorBornIn1947());

// Retorne o nome do livro com menor número de caracteres (menor nome).
// const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName());

// Encontre o primeiro livro cujo nome possua 26 caracteres.
const getBookByLength = (number) => {
  return books.find((book) => book.name.length === number);
};
console.log(getBookByLength(26));

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000)
}
console.log(everyoneWasBornOnSecXX());

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}
console.log(someBookWasReleaseOnThe80s());

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const authorUnique = () => {
  const birthdays = [];
  books.forEach(book => birthdays.push(book.author.birthYear));
  for (let index = 0; index < birthdays.length; index += 1) {
    for (let index2 = index + 1; index2 < birthdays.length; index2 += 1) {
      if (birthdays[index] === birthdays[index2]) {
        return false;
      }
    }
  }
  return true;
};
console.log(authorUnique());