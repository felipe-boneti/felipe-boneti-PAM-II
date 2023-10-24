let somaNum1 = 2;
let somaNum2 = 5;

function soma(){
    somaResult = somaNum1 + somaNum2;
    console.log("O resultado da soma é:", somaResult);
}

function somaComParametros(paramNum1,paramNum2){
    paramResult = paramNum1 + paramNum2;
    console.log("O resultado da soma com parâmetros é:", paramResult);
}

// soma();
// somaComParametros(4,19);

// =================================================================================================

const multiplicacao = (multNum1, multNum2) => {
    return multNum1 * multNum2;
}

// console.log(multiplicacao(4,5));

// =================================================================================================

let usuario = {
    nome: "Felipe",
    idade: 26,
    signo: "Gêmeos",
    calvo: false
}

// console.log(typeof(usuario));

// console.log(
//     "nome:",usuario.nome,
//     "\nidade:",usuario.idade
// );

// console.log(typeof(usuario.calvo));

// =================================================================================================

const somaMelhorada = (n1, n2) => {
    let resultNovaFunc = '';
    
    if(typeof(n1) == 'number' && typeof(n2) == 'number'){
        resultNovaFunc = n1 + n2;
        return "Resultado: " + resultNovaFunc;
    }
    
    return "Valores de entrada inválidos!";
}

console.log(somaMelhorada(12,18));