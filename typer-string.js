// string = tipo texto - guardar caractere, pontuação, palavras... ( QUE NÃO SEJA NUMERO NEM BOLEANO)

const texto1 = 'ola mundo';
const texto2 = "olá mundo";
const senha = "senha super segura123!";
const stringdeNumeros = "123456";
const citacaoSimples ='O leo disse "oi"';
const citacaoDupla = "O Leo disse 'oi'! ";

console.log(citacaoSimples)
console.log(citacaoDupla )

// concatemação (+ OU ,)

const citacao = "Meu nome é";
const meuNome = "Camila "; 

console.log(citacao , meuNome)

// PROCURAR template string OU template literal


var teste = "testee"
var teste2 = "testando"

console.log(teste,teste2)


// Codigo Unicode ou UTF-16
//o caracter \u é um caracter de escape que é usado para sinalizar ao JavaScript que estamo usando codigos Unicode o -16 é o espaço em bits ocupado pelos caracteres 
     

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)



//A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém
const senha1 = "minhaSenha123"
console.log(senha1.length) // 13 caracteres


//o JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas ex:
const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

//Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.

