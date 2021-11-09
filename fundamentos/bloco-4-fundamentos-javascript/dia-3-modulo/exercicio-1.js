// 1- Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let lado = 8;
let simbolo = "*"

for (let index = 0; index < lado; index += 1) {
    console.log(simbolo.repeat(lado));
}