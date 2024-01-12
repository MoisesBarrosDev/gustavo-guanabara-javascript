
/* Operadores relacionais
> = maior
< = menor
>= = maior ou igual
<= = menor ou igual
== = igual
!= = não igual ou diferente

Operadores de identidade

5 == 5 = true
5 == '5' = true
5 === '5' = false  === esses 3 sinais de igual sgnifica assim ; o valor é identico ao outro? (repare que a conta de cima nao é a mesma que a de baixo; são 3 sinais de  === )
5 === 5 = true


  5 > 2 = true (sgnifica valor verdadeiro)
  7 < 4 = false (sgnifica valor falso)
  8 >= 8 = true (sgnifica valor verdadeiro)
  9 <= 7 = false (sgnifica valor falso)
  5 == 5 = true (sgnifica valor verdadeiro)
  4 != 4 = false (sgnifica valor falso)

*/
// 8 > 2
// 9 < 6
// 10 >= 9
// 3 <= 2
// 5 == 5
// 2 != 2


// let a = 10
// let b = 9
// let result = a <= b - 10
// console.log( result)


//let preço = 3500.2
//let preço2 = 200.5
//let idade = 20
//let idade2 = 18
// let curso = uva
// let curso2 = lulu
//let n1 = 5
//let n2 = 7
//let resultado1= preço >= preço2 // o preço é maior ou igual?
//let resultado2= idade < idade2  // a idade é menor que 18?  
// let resultado3= curso == curso2  // o curso é igual a javaScript?
//let resultado4= n1!=n2     // o primeiro numero é diferente do segundo?

// console.log ( resultado4)



//  operador de indentidade ===
//let x = 5
//let y =  '5'
//let resul = x === y

// console.log(resul)
// console.log(typeof y)

// operadores logicos
//  caso os 3 operadores estejam na mesma CONTA essa é a ordem por onde começar a calcular de cima que no caso é ! pra baixo, que no caso é ||
//  ! = negação
//  && = conjunção
// || = disjunção

// negação
// ! true => false
// ! false => true


/*  conjunção

  true  &&  true => true
  true  &&  false => false
  false &&  true => false
  false &&  false => false
*/

/* disjunção
  true  || true => true
  true  || false => true
  false || true => true
  false || false => false
*/


// a > b && b % 2 == 0
// primeiro faz a conta pelos operadores aritimedicos % depois os operadores relacionais == e > e por ultimo os operadores logicos &&


// operador ternario
//  ?
//  :
//  teste ? true : false

 /*  
 esse codigo abaixo: 
  1 - criei uma variavel  chamada = nota e botei um valor nela
  2 - criei uma variavel chamada = media 
  3 - criei uma variavel chamada = resol

   depois que botei um valor na variavel nota,
   peguei a variavel media e coloquei dentro dela a variavel nota e fiz uma pergunta,
   essa pergunta é: a variavel nota que no caso é o número 8 é maior ou igual a 7?
   caso a variavel nota for 7 ou mais do que 7 vai aparecer Aprovado, caso seja menor,
   vai aparecer reprovado, nao esqueça na hora de fazer este test colocar ':' porque se não colocar,
   esse operador no meio de aprovado : reprovado, como acabei de fazer, não vai funcionar.

   ai peguei a variavel  resol e coloquei entre '' o texto que eu quero que apareça, depois disso
   concatenei com o + e coloquei a variavel nota + depois concatenei de novo , coloquei em '' o texto 
   que eu queria que aparecesse  + concatenei denovo e coloquei a variavel media, que no caso
   vai me resultar se foi aprovado ou reprovado. 
 */

let nota = 8
let media = nota >=7?  'Aprovado' : 'Reprovado'
let resol = 'o Aluno,moisés tirou a nota '+ nota + ' Por isso está ' + media 
console.log(resol)
 

let idad = 21
let r = idad >= 18 ? 'Maior' : 'Menor'
console.log(r)  


let x = 8
let re = x % 2 == 0? 5:9
console.log(re)