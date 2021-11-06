
const peca = "tORRE";

npeca = peca.toLowerCase();

if (npeca === "rei") {
    console.log("Rei -> qualquer direção");
}
else if (npeca === "dama") {
    console.log("Dama -> qualquer direção");
}
else if (npeca === "torre") {
    console.log("Torre -> linha reta vertical ou horizontal");
}
else if (npeca === "peao") {
    console.log("Peão -> um casa para frente");
}
else if (npeca === "bispo") {
    console.log("Bispo -> linha reta diagonal");
}
else if (npeca === "cavalo") {
    console.log("Cavalo -> movimento em L");
}
else {
    console.log("Peça inválida!");
}
