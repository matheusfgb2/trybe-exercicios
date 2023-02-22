const square = (n) => {
  let symbol = '';
  for (let i = 0; i < n; i++) {
    symbol += '*';
  }
  for (let i = 0; i < n; i++) {
    console.log(symbol);
  }
}

const triangleRectangle = (n) => {
  let symbol = '';
  for (let i = 1; i <= n; i++) {
    symbol += '*';
    console.log(symbol);
  }
}

const invTrRect = (n) => {
  let symbol = '';
  let space = '';
  for (let row = 1; row <= n; row++) {
    for (let spaces = 0; spaces < n - row; spaces++) {
      space += ' ';
    }
    symbol += '*';
    console.log(space + symbol);
    space = '';
  }
}

const pyramid = (n) => {
  if (n % 2 === 0) return console.log('Odd numbers only');
  let symbol = '*';
  let space = '';
  const rowAmount = (n + 1) / 2;
  for (let row = 1; row <= rowAmount; row++) {
    for (let spaces = 0; spaces < rowAmount - row; spaces++) {
      space += ' ';
      }
      console.log(space + symbol);
      space = '';
      symbol += '**';
    }
}
const difRow = (n, space, rows) => {
  let content = '';
  let symbol = '';
  let nOfIS = 1;
  // Print middle rows
  for (let j = 0; j < space; j++) {
    for (let i = 0; i < space - j; i++) {
      content += ' ';
    }
    content += '*';
    for (let i = 0; i < nOfIS; i++) {
      content += ' ';
    }
    content += '*';
    console.log(content);
    content = '';
    nOfIS += 2;
  }
  // Print last row
  for (let i = 0; i < rows; i++) {
    symbol += '*';
  }
  console.log(symbol);
}

const emptyPyramid = (n) => {
  if (n % 2 === 0) return console.log('Odd numbers only');
  let symbol = '*';
  let space = '';
  const rowAmount = (n + 1) / 2;
  const difRowsN = rowAmount - 2;
  for (let spaces = 0; spaces < rowAmount - 1; spaces++) {
    space += ' ';
  }
  console.log(space + symbol);
  difRow(difRowsN, space.length - 1, n);
}

const makeMagik = (n) => {
  console.log('Square:');
  square(n);
  console.log('Triangle Rectangle:');
  triangleRectangle(n);
  console.log('Inverted Triangle Rectangle:');
  invTrRect(n);
  console.log('Pyramid:');
  pyramid(n);
  console.log('Empty Middle Pyramid:');
  emptyPyramid(n);
}

makeMagik(25);
