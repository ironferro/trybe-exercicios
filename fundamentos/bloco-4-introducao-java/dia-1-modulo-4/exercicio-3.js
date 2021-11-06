// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const num1 = 34;
const num2 = 19;
const num3 = 20;
let maior;

if (num1 > num2 && num1 > num3) {
    maior = num1;
}
else if (num2 > num1 && num2 > num3) {
    maior = num2;
}
else {
    maior = num3;
}

console.log("O maior número é", maior);