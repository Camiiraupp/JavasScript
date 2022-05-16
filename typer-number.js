//tipo number
//cls limpar terminal

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2; 

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante 

const numeroPontoFlutuante = 3.3;
const  nnumeroPontoFlutuante1 = .5; 

const operacao = numeroPontoFlutuante / nnumeroPontoFlutuante1;

console.log(operacao)


//NaN -> Not A Number (Não é um numero)

const alura = "Alura"; 

console.log(alura * numeroPontoFlutuante)

//Divição por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. 

const diviA = 2;
const diviB = 0;

const divicaoPorZero = diviA / diviB;

console.log(divicaoPorZero)

//utilizamos parênteses () para seguir a regra matemática de precedência nas operações.

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao2 = (soma + multiplicacao) + 10;
console.log(operacao2)