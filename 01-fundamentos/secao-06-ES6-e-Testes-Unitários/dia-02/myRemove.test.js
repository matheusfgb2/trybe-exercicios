const myRemove = require('./myRemove');


describe('Testando se myRemove retorna um array sem o elemento indicado', () => {
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
