//null é um tipo especial = "ausencia de valor" e pode ser atribuido como valor de uma variavel 
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

//qual a diferença?
let input3 = null;
let input2;

console.log(input3); // null
console.log(input2); // undefined

//undefined tambem representa "ausencia de valor" porem de outra forma
    // - null é um valor atribuído a uma variável que existe e foi iniciada
    // - undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).
        // undefined também é o valor retornado por uma função que não tem cláusula return. 

// os operadores de comparação do JavaScript podem ou não diferenciá-los:
console.log(null == undefined); // true
console.log(null === undefined); // false

//null e undefined 
    // null é um tipo de dado que representa vazio, não representa nada 

    let minhaVar; //undefined
    let varNull = null;
    
    console.log(minhaVar)
    console.log(varNull)
    
    let numero = 3;
    let texto = "alura";
    
    console.log(typeof numero)
    console.log(typeof texto)
    
    console.log(typeof minhaVar)
    console.log(typeof varNull) //object 
    