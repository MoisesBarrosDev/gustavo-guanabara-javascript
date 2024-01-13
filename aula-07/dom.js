
// testando com id,class,tag

window.document.getElementsByTagName('p')[1].style.color = 'red'
window.document.write( 'Está escrito assim : ' + window.document.getElementsByTagName('p')[1].innerHTML)

let msg = window.document.getElementById('msg'); 
msg.style.background = "green";
msg.innerText = 'ola'
// tem essa maneira de cima de mudar oque ta escrito no html e a maneira de baixo:
// window.document.getElementById('msg').innerHTML = 'ola'

// testando com queryselector()  e queryselector all() o all sgifica = plural

   let bb = window.document.querySelector('h1.bb') // aqui usa a regra do css,se for class é . , se for div é #    exemplo: ('h1#bb')
  bb.style.color = 'yellow';                   


// caso queira queira mudar o seletor p é so colocar outro numero ali dentro do [] que no caso é 1, so tem 2 p no html entao é 0 para o primeiro p e 1 para o segundo p
 

// let test = window.document.getElementById('test').style.color = "blue"



// oque sgnifica dom? 
// document object model. modelo de objetos para documentos, o dom estar presente quando eu abro meu,
//  site no navegador

/*    Arvore DOM
       
              window

    location  document   history 
              
              html
              
         head      body
         
  meta  title
              
                  h1  p  p  div
                      
                      strong   
*/
