let player = {
    nome: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log('A jogadora ' + player.nome + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
console.log('A jogadora ' + player.nome + ' ' + player.lastName + ' foi eleita a melhor do mundo 6 vezes.');
console.log(player.bestInTheWorld)

//FOR IN

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

//########################################################

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
  for (let key in names) {
      console.log('Olá ' + names[key]);
  }

  //######################################################

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in car) {
      console.log(index, car[index]);
  }

  //FUNÇÕES

  function bomDia(pessoa) {
    return 'Bom dia!', pessoa;
  }
  
  console.log(bomDia('bárbara')); // Bom dia!