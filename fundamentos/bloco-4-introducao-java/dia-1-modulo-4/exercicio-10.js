const valorCusto = 150;
const valorVenda = 200;
let custoTotal, lucro;

if (valorCusto != 0 && valorVenda != 0) {
    custoTotal = 1.2 * valorCusto;
    lucro = (valorVenda - custoTotal) * 1000;
}
else {
    console.log("ERRO");
}
console.log("O lucro da venda das 1000 unidades foi ", lucro);
