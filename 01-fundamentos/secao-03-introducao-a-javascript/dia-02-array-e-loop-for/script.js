let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i = 0;
let arraySum = 0;
console.log("os números contidos na array são:");
do {
    console.log(numbers[i]);
    arraySum += numbers[i];
    i += 1;
} while (i < numbers.length);
console.log("");
console.log("a soma dos números da array é " + arraySum);
console.log("");

let arithmeticMean = arraySum / numbers.length;
console.log("a média aritmética da array é " + arithmeticMean);
console.log("");

if (arithmeticMean > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}
console.log("");

let greatestNumber = 0;
let oddCount = 0;
let smallestNumber = numbers[0];
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > greatestNumber) {
        greatestNumber = numbers[index];
    }
    if (numbers[index] % 2 === 1) {
        oddCount += 1;
    }
    if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index];
    }
}
console.log(greatestNumber + " é o maior número da array");
console.log("");

if (oddCount === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(oddCount + ' números ímpares encontrados');
}
console.log("");
console.log(smallestNumber + " é o menor número da array");
console.log("");

let toTwentyFive = [];
for (index = 1; index <= 25; index += 1 ) {
    toTwentyFive.push(index);
}
console.log(toTwentyFive);

for (index = 0; index < toTwentyFive.length; index += 1) {
    console.log(toTwentyFive[index] / 2);
}