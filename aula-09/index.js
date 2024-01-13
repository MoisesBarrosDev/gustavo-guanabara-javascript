function calcular () {

let vel = document.querySelector('input#vel')
let resul = document.querySelector ('div#resul')
let velo = Number(vel.value) 
resul.innerHTML = `<p>Sua velociade atual é de <strong>${velo}Km/h</strong></p>`
if (velo > 60) {
  resul.innerHTML += `<p>Você está <strong>Multado!</strong></p>`
}
resul.innerHTML += `<p>Dirija sempre com o cinto de segurança!</p>` //no caso o + aqui está concatenando
}
  
