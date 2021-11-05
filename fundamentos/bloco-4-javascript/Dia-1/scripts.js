const nota = 70;

switch (nota) {
    case nota >= 80:
        console.log("Parabéns, você foi aprovado!!!!");
    
    case nota >= 60 && nota < 80:
        console.log("Você está na lista de espera");
    
    case nota < 60:
        console.log("Você foi reprovada(o)");
    
    default:
        console.log("não se aplica");
}

// if (nota >= 80) {
//     console.log("Parabéns, você foi aprovado!!!!");
// }
// else if (nota >= 60 && nota < 80) {
//     console.log("Você está na lista de espera");
// }
// else {
//     console.log("Você foi reprovada(o)");
// }