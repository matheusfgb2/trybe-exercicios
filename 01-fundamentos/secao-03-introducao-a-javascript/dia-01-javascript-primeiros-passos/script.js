
// const myName = 'Matheus';
// const birthCity = 'Niterói';
// let birthYear = 1992;
// birthYear = 2030;
// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = ['ana@email.com', 30];
// console.log(typeof patientInfo.firstName);

// const base = 5;
// const height =  8;
// const area = base * height;
// const perimeter = base * 2 + height * 2;
// console.log(area);
// console.log(perimeter);

// const notaCandidato = 59;
// if (notaCandidato >= 80) {
//     console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
// }
// else if (notaCandidato < 80 && notaCandidato >= 60) {
//     console.log("Você está na nossa lista de espera");
// }
// else {
//     console.log("Infelizmente, você reprovou.");
// }

// const a = 5;
// const b = 3;
// const c = 9;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// const d = 0.5;
// if (d > 0) {
//     console.log("positive");
// } else if (d < 0) {
//     console.log("negative");
// } else {
//     console.log("zero");
// }

// const firstAngle = 80;
// const secondAngle = 101;
// const thirdAngle = -1;
// if (typeof firstAngle != 'number' || typeof secondAngle != 'number' || typeof thirdAngle != 'number') {
//     console.log("invalid");
//     return;
// } else if (firstAngle < 0 || secondAngle < 0 || thirdAngle < 0) {
//     console.log("invalid");
//     return;
// } else if (firstAngle + secondAngle + thirdAngle === 180) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const a = 10;
// const b = 4;
// const c = 8;
// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const a = 10;
// const b = 5;
// const c = 8;
// if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const custo = 12;
// const valorDeVenda = 38;
// const custoTotal = custo + custo * 0.20;

// if (valorDeVenda < 0 || custo < 0) {
//     console.log("invalid value");
//     return
// } else {
//     const lucro = valorDeVenda - custoTotal;
//     console.log(lucro);
// }

const salarioBruto = 2504.87;
let salarioDescontadoInss;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    salarioDescontadoInss = salarioBruto - salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioDescontadoInss = salarioBruto - salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioDescontadoInss = salarioBruto - salarioBruto * 0.11;
} else if (salarioBruto >= 5189.82) {
    salarioDescontadoInss = salarioBruto - 570.88;
}

if (salarioDescontadoInss <= 1903.98) {
    salarioLiquido = salarioDescontadoInss;
} else if (salarioDescontadoInss >= 1903.99 && salarioDescontadoInss <= 2826.65) {
    salarioLiquido = salarioDescontadoInss - (salarioDescontadoInss * 0.075 - 142.8);
} else if (salarioDescontadoInss >= 2826.66 && salarioDescontadoInss <= 3751.05) {
    salarioLiquido = salarioDescontadoInss - (salarioDescontadoInss * 0.15 - 354.8);
} else if (salarioDescontadoInss >= 3751.06 && salarioDescontadoInss <= 4664.68) {
    salarioLiquido = salarioDescontadoInss - (salarioDescontadoInss * 0.225 - 636.13);
} else {
    salarioLiquido = salarioDescontadoInss - (salarioDescontadoInss * 0.275 - 869.36);
}

console.log(salarioLiquido);