// Booleano (===) - verdadeiro(True) ou falso(False) --> comparação (if/else/for)

const numero1 = 5;
const numero2 = 10;
const numero3 = 5;

console.log(numero1 === numero2)
console.log(numero1 === numero3)

// comparação entre duas strings 

const textoo1 = "Alura";
const testooo2 = "a";

console.log(textoo1 === testooo2)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
// o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputMinusculo = input1.toLowerCase();

console.log(cidade1 === inputMinusculo); // true

//toLowerCase() converte todos os caracteres da string informada (no caso, input) para letras minúsculas 


//Letra Maiuscula e Minuscula = toLowerCase() 

const texto3 = "Alura";
const texto4 ="alura";

console.log(texto3 === texto4)


const usuarioLogado = true;
const contaPaga = false;






