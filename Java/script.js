// //alert('Hello World!')

// //String
// let nome = "Giovana"
// // ; é opcional e com as aspas simples ' fica o codigo mais limpo
// let nome1 = "João"
// let nome2 =`Carla`
// let ola = 'Hello, World!'

// console.log(nome);
// console.log('Hello, World!')

// //Number

// let idade = 25

// console.log (idade)

// let preco = 19.99

// console.log (preco)

// //Boolean 
// let estaChovendo = false //true

// console.log (estaChovendo)

// //undefined
//     let sobrenome

//     console.log (sobrenome)

// //null
//     let a = 2
//     let b = a
//     a = 5
//     console.log (b)
//     console.log (a)

//     let lista = 'banana, uva, moorango'

//     console.log(typeof estaChovendo)

// adição

// let soma = 3+5;

// console.log(soma)

// //subtração

// let subtracao = 7-2;
// console.log(subtracao)

// //multiplicação
// let multiplicacao = 4*6
// console.log(multiplicacao)

// //divisão
// let divisao = 10/2
// console.log(divisao)

// //resto da divisão
// let resto = 10%3
// console.log(resto)

// //incremento
// let numero = 5
// numero++
// console.log(++numero)  //incremento vai antes se numero++ incremento vai deois

// // decremento
// let numero2 = 8
// console.log(numero2--)
// console.log(numero2)

// // exponenciação
// let potencia = 2**3
// console.log(potencia) 

// //console.log(Math.pow(2, 3))

// let a =10
// let b = 3

// a += 5 //a = a + 5
// console.log(a)

// b -= 2 //b = b -2
// console.log(b)

// a *= 3 // a = a * 3
// console.log(a)

// b /= 4 //b = b / 4
// console.log(b)

// a %= 7 // a = a % 7
// console.log(a)

// //operadores relacionais
// let num1 = 5
// let num2 = 7

// //maior que
// let maior = num2 > num1
// console.log(maior)

// //menor que
// let menor = num2 < num1
// console.log(menor)

// //maior ou igual
// let maiorOuIgual = num2 >= num1
// console.log(maiorOuIgual)

// //menor ou igual
// let menorOuIgual = num1 <= 5
// console.log(menorOuIgual)

// //igual a 
// let igual = num1 === '5'  //tres iguais compara tanto o valor quanto o tipo (number e string)
// console.log(igual)

// let diferente = num1 !== 5
// console.log(diferente)

// let haveMoney = false //true

// if (haveMoney) {
//     console.log('vou passear no domingo')
// } else {
//     console.log('vou ficar em casa')
// }

// let num = 10

// if (num >= 10) {
//     console.log('O número é maior ou igual a dez!')
// } else {
//     console.log('O número não é maior ou igual a dez!')

// }

// (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)/(peso1 + peso2 + peso3)


//Entrada de dados
let nota1 = 7
let nota2 = 8
let nota3 = 6

let peso1 = 2
let peso2 = 3
let peso3 = 5

//Cáculo média ponderada
//Processamento
let notaFinal = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)


//Condicional
if (notaFinal >= 7) {
    console.log('Parabéns! Você passou! Sua média foi de: ' , notaFinal)
} else {
    console.log('Oow, que pena, mais esforço na próxima! Sua média foi de: ' , notaFinal)
}

//Entrada de dados
let anos = 25
let meses = 6
let dias = 15

//Processamento
let idadeEmDias = (anos * 365) + (meses * 30) + dias

//Saída
console.log('A idade da pessoa é ' + idadeEmDias + ' dias.')

//Entrada
let num1 = 9
let num2 = 5

//Processamento
let soma = (num1 + num2)
console.log(soma)

let subtracao = (num1 - num2)
console.log(subtracao)

let multiplicacao = (num1 * num2)
console.log(multiplicacao)

let divisao = (num1 / num2)
console.log(divisao)