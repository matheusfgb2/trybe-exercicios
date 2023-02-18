const { myRemove, myFizzBuzz, encode, decode, techList } = require('./script');

describe('Testando a função myRemove', () => {
  it('A função, ao receber ([1, 2, 3, 4], 3), deve retornar [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('A função, ao receber ([1, 2, 3, 4], 3), não deve retornar [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('A função, ao receber ([1, 2, 3, 4], 5), deve retornar [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Testando a função myFizzBuzz', () => {
  it('A função, ao receber um número divisível por 3 e 5, deve retornar "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
    expect(myFizzBuzz(75)).toBe('fizzbuzz');
  });
  it('A função, ao receber um número divisível por 3, deve retornar "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(21)).toBe('fizz');
    expect(myFizzBuzz(39)).toBe('fizz');
  });
  it('A função, ao receber um número divisível por 5, deve retornar "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(35)).toBe('buzz');
    expect(myFizzBuzz(50)).toBe('buzz');
  });
});

describe('Testando as funções encode e decode', () => {
  it('Verificando se ambas são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Verificando se a função encode retorna os valores corretos para a, e, i, o, u', () => {
    expect(encode('Olá, tudo bem?')).toBe('Olá, t5d4 b2m?');
    expect(encode('Sou tryber de coração, amigo')).toBe('S45 tryb2r d2 c4r1çã4, 1m3g4');
  })
  it('Verificando se a função decode retorna os valores corretos para 1, 2, 3, 4, 5', () => {
    expect(decode('Olá, t5d4 b2m?')).toBe('Olá, tudo bem?');
    expect(decode('S45 tryb2r d2 c4r1çã4, 1m3g4')).toBe('Sou tryber de coração, amigo');
  })
  it('Verificando se as demais letras e números não são convertidas nas funções', () => {
    expect(encode('d')).toBe('d');
    expect(encode('f')).toBe('f');
    expect(encode('g')).toBe('g');
    expect(encode('h')).toBe('h');
    expect(encode('j')).toBe('j');
    expect(decode('6')).toBe('6');
    expect(decode('96')).toBe('96');
    expect(decode('69')).toBe('69');
    expect(decode('78')).toBe('78');
    expect(decode('89')).toBe('89');
  })

  const randomString = (name) => {
    const str = name === 'encode' ? 'Esta é uma string aleatória para testar a função' : 'Est1 é 5m1 str3ng 1l21tór31 p1r1 t2st1r 1 f5nçã4';
    let nStr = '';
    let n = Math.floor(Math.random() * str.length);
    for (let i = 0; i < n; i++) {
      nStr += str[i];
    }
    return nStr;
  }
  
  const frase1 = randomString('encode');
  const frase2 = randomString('encode');
  const frase3 = randomString('decode');
  const frase4 = randomString('decode');

  it('Verificando se as entradas e saídas das funções tem o mesmo tamanho em frases geradas aleatoriamente', () => {
    expect(encode(frase1).length).toBe(frase1.length);
    expect(encode(frase2).length).toBe(frase2.length);
    expect(decode(frase3).length).toBe(frase3.length);
    expect(decode(frase4).length).toBe(frase4.length);
  })
});


describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
