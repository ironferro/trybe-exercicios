// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const ang1 = 125;
const ang2 = -25;
const ang3 = 30;

let soma;

if (ang1 > 0 && ang2 > 0 && ang3 > 0) {
    soma = ang1 + ang2 + ang3;
    if (soma == 180) {
        console.log("É um triângulo válido!")
    }
    else {
        console.log("NÃO é um triângulo válido!")
    }
}
else {
    console.log("ângulo inválido")
}