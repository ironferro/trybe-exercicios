// 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let soma = 0;

for (let i = 2; i <= 150; i += 1) { 
    if (i % 3 == 0) {
        soma = soma + 1; //adiciona 1 toda vez que for divisível por 3
    }
}

console.log("Há " + soma + " números divisíveis por 3");
console.log();

if (soma == 50) {
    console.log("Mensagem secreta liberada");
    console.log("   Foguete não tem ré!!!!");
}
