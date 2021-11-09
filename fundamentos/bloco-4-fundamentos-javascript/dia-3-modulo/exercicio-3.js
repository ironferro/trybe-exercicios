// 3- Agora inverta o lado do triângulo.

let lado = 5;
let simbolo = "*";
let espaco = ' ';

for (let i = 1; i <= lado; i += 1) {
        console.log(espaco.repeat(lado - i) + simbolo.repeat(i));
}