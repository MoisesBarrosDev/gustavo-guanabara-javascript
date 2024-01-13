
function VerificarNacionalidade()  { 
  let Nacionalidade = document.querySelector('input#Nacionalidade')
  let resultado = document.querySelector('div#resultado')
  if (Nacionalidade.value != 'Brasil'){
  resultado.innerHTML = `<p> Por isso Você é <strong>Estrangeiro!<strong/></p>`
} else {
  resultado.innerHTML += `<p> Por isso Você é <strong>Brasileiro!<strong></p>`
}
 }