// Var, let e const 

// --Var--

var altura = 5;
var comprimento =7;

area = altura * comprimento 
console.log(area)
var area;
//var não tem muitas regras, ela é solta e pode acontecer alguns comportamentos não previstos

// --let --

let forma = "retangulo"
let altura2 = 5; 
let comprimento2 = 7;
let area2;

if( forma === 'retangulo'){
  area2 = altura2 * comprimento2;  
} else {
    area2 = (altura2 * comprimento2) / 2;
}

console.log(area2)



// -- const --

const forma3 = "triangulo";
const altura3 = 5;
const comprimento3 = 7;
let area3; // tem que atribuir um valor para funcionar

if(forma3 === 'quadrado'){
  area3 = altura3 * comprimento3; 
} else{ 
   area3 = (altura3 * comprimento3) /2;
}
//const area3 = altura3 * comprimento3; 

console.log(area3)

//identificador o mais explicativo possivel:
let cpfUsuario = "12312312312"

// javascript não reconhece essas palavras como identificador: 
//let var = 0;
//let if = 0;
//let const = "Alura";

//aceitavel 
let varInicial = 0;
let ifFalse = 0;
let constDeTexto = "Alura";


let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100










