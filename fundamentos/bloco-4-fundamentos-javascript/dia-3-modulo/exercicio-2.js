// 2 - Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let lado = 5;
let simbolo = "*"

for (let i = 1; i <= lado; i += 1) {
    console.log(simbolo.repeat(i));
}