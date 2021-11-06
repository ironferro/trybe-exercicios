const salario = 2789;
let descInss, descRenda, salarioInss, salarioLiquido;

// INSS
if (salario <= 1556.94) {
    descInss = 0.08 * salario;
}
else if (salario >= 1556.95 && salario <= 2594.92) {
    descInss = 0.09 * salario;
}
else if (salario > 2594.92 && salario <= 5189.82 ) {
    descInss = 0.11 * salario;
}
else {
    descInss = 570.88;
}

salarioInss = salario - descInss; //salário descontado o INSS

// IMPOSTO DE RENDA

if (salarioInss <= 1903.98) {
    descRenda = 0;
}
else if (salarioInss >= 1903.99 && salarioInss <= 2826.65) {
    descRenda = (0.075 * salarioInss) - 142.8;
}
else if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
    descRenda = (0.15 * salarioInss) - 354.8;
}
else if (salarioInss >= 3751.06 && salarioInss <= 4664.68) {
    descRenda = (0.225 * salarioInss) - 613.13;
}
else {
    descRenda = (0.275 * salarioInss) - 869.36;
}
salarioLiquido = salarioInss - descRenda; 

console.log("O salário líquido é R$", salarioLiquido);
