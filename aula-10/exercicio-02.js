let Hora = 12
console.log(`São Exatamente ${Hora} Horas.`)

if (Hora < 12){
  console.log(`Bom Dia!`)
} else if (Hora <= 18){
  console.log(`Boa Tarde!`)
}else {
  console.log(`Boa Noite!`)
}

// pra pegar a hora do pc

let agora = new Date()
let hora = agora.getHours()
console.log(`São Exatamente ${hora} Horas.`)

if (hora < 12){
  console.log(`Bom Dia!`)
} else if (hora <= 18){
  console.log(`Boa Tarde!`)
}else {
  console.log(`Boa Noite!`)
}

