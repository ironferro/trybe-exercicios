// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for (let num of fruits) {
    soma = soma + num;
}

if (soma > 15) {
    console.log(soma);
}
else {
    console.log('Número menor que 15')
}
