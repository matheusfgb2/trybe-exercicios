const { myRemove, myFizzBuzz } = require('./script');


describe('Testando a função myRemove', () => {
  test('A função, ao receber ([1, 2, 3, 4], 3), deve retornar [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('A função, ao receber ([1, 2, 3, 4], 3), não deve retornar [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('A função, ao receber ([1, 2, 3, 4], 5), deve retornar [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Testando a função myFizzBuzz', () => {
  test('A função, ao receber um número divisível por 3 e 5, deve retornar "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
    expect(myFizzBuzz(75)).toBe('fizzbuzz');
  });
  test('A função, ao receber um número divisível por 3, deve retornar "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(21)).toBe('fizz');
    expect(myFizzBuzz(39)).toBe('fizz');
  });
  test('A função, ao receber um número divisível por 5, deve retornar "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(35)).toBe('buzz');
    expect(myFizzBuzz(50)).toBe('buzz');
  });
});
