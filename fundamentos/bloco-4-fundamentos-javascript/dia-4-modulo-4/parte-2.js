//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome (palavra) {
    if (palavra === palavra.reverse()) {
        return True;
    } else {
        return False;
    }
}

verificaPalindrome('roma');