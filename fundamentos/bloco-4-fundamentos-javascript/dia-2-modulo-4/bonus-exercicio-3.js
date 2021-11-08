// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicado = [];

for (let i = 0; i < numbers.length; i++) {
    if (i + 1 < numbers.length) { //verificar se chegou no último elemento
        multiplicado.push(numbers[i] * numbers[i+1]);
        
    }
    else {
        multiplicado.push(numbers[i] * 2);
    }
}

console.log(multiplicado);