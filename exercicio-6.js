// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers = [4, 8, 6];
let impar = 0;

for (let num of numbers) {
    if (num % 2 != 0) {
        impar += 1;
    }
}

if (impar > 0) {
    console.log(impar);
}
else {
    console.log('nenhum valor ímpar encontrado');
}
