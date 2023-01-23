let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//3o exercicio
let multipliedArray = [];
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index + 1] === undefined) {
        multipliedArray.push(numbers[index] * 2);
    } else {
        multipliedArray.push(numbers[index] * numbers[index + 1]);
    }
}
console.log(multipliedArray);
//


//1o exercicio
for (index = 1; index < numbers.length; index += 1) {
    for (indexTwo = 0; indexTwo < numbers.length - index; indexTwo += 1) {
        if (numbers[indexTwo] > numbers[indexTwo + 1]) {
            let aux = numbers[indexTwo + 1];
            numbers[indexTwo + 1] = numbers[indexTwo];
            numbers[indexTwo] = aux;
        }
    }
}
console.log(numbers);
//

//2o exercicio
for (index = 1; index < numbers.length; index += 1) {
    for (indexTwo = 0; indexTwo < numbers.length - index; indexTwo += 1) {
        if (numbers[indexTwo] < numbers[indexTwo + 1]) {
            let aux = numbers[indexTwo + 1];
            numbers[indexTwo + 1] = numbers[indexTwo];
            numbers[indexTwo] = aux;
        }
    }
}
console.log(numbers);
//