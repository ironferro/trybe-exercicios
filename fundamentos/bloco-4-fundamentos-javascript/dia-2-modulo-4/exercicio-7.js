// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [250, 9, 3, 19, 70, 8, 100, -5, 35, 27];
let menor = numbers[0];

for (let num of numbers) {
    if (num < menor) {
        menor = num;
    }
}

console.log('O menor número da lista é', menor);