let  agora = new Date()
let diaSem = agora.getDay()

/*   esses numeros ao lado do dia simboliza oque é para o javascript 
 Domingo = 0
 Segunda = 1
 Terça-feira = 2
 Quarta-feira = 3
 Quinta-feira = 4
 Sexta-feira = 5
 Sabado = 6
*/

//console.log(diaSem)

// não pode esquecer de colocar o break.
// a tag switch so funciona com numeros inteiros ou com strings

switch(diaSem){
  case 0 :
    console.log(`Domingo`)
    break 

    case 1 :
    console.log(`Segunda`)
    break

    case 2 :
    console.log(`Terça-feira`)
    break

    case 3 :
    console.log(`Quarta-feira`)
    break

    case 4 :
    console.log(`Quinta-feira`)
    break

    case 5 :
    console.log(`Sexta-feira `)
    break

    case 6 :
    console.log(`Sabado`)
    break

    default:
      console.log(`[ERRO], Dia invalido!`)
      break
}
