// // Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

for (let index = 1; index < numbers.length; index += 1){
    for (let i = 0; i < index; i +=1) {
        if (numbers[index] < numbers[i]){
            let ordem = numbers[index];
            numbers[index] = numbers[i];
            numbers[i] = ordem;
        }
    }
}

console.log(numbers);