// abra o html no navegador e veja a magica
// cada codigo desse é muito importante
// caso você erre , e isso é normal no inicio, vai para o seu navegador e coloque pra inspecionar e dai você vai ver aonde você error. 


let ar =  window.document.getElementsByClassName('area')[0]; ar.addEventListener('click',clicar);
let a =  window.document.getElementsByClassName('area')[0];  a.addEventListener('mouseenter',entrar);
let b =  window.document.getElementsByClassName('area')[0];  b.addEventListener('mouseout',sair);


function clicar() {
  ar.innerHTML = 'Clicou!'
  ar.style.background = 'yellowgreen'
 ar.style.color = 'red'
}

function entrar() {
  a.innerText= 'Entrou!'
  a.style.color = 'blue'
  a.style.background = 'black'
 }

 function sair() {
  b.innerHTML = 'Saiu!'
  b.style.background = ' rgba(160, 100, 57, 0.801)'
  b.style.color = 'white'
  
}
