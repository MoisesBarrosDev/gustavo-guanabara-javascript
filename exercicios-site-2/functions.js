function Verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtano')
  let res = document.querySelector('div#res')

  let bb = 'Bêbê'
  let cri = 'Criança'
  let ado = 'Adolescente'
  let jove = 'Jovem'
  let adu = 'Adulto'
  let ido = 'Idoso'
  let adulta = 'Adulta'
  let idosa = 'Idosa'

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let Gênero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'photo')
    if (fsex[0].checked) {
      Gênero = 'Homem'
      if (idade >= 0 && idade <= 3) {
        // bêbê
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        img.setAttribute('src', "photo-men-site/bebe.png")
        res.innerHTML = `Detectamos um    ${bb}   com ${idade} anos.`
      } else if (idade >= 4 && idade <= 10) {
        // criança
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        img.setAttribute('src', "photo-men-site/criança.png")
        res.innerHTML = `Detectamos um    ${cri}   com ${idade} anos.`
      } else if (idade >= 11 && idade <= 15) {
        // adolescente
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        img.setAttribute('src', "photo-men-site/adolescente.png")
        res.innerHTML = `Detectamos um    ${ado}   com ${idade} anos.`
      } else if (idade >= 16 && idade <= 17) {
        // jovem
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        img.setAttribute('src', "photo-men-site/jovem.png")
        res.innerHTML = `Detectamos um    ${jove}   com ${idade} anos.`
      } else if (idade >= 18 && idade <= 60) {
        // adulto
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        img.setAttribute('src', "photo-men-site/adulto.png")
        res.innerHTML = `Detectamos um    ${adu}   com ${idade} anos.`
      } else if (idade >= 61 && idade <= 100) {
        // idoso
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        img.setAttribute('src', "photo-men-site/idoso.png")
        res.innerHTML = `Detectamos um    ${ido}   com ${idade} anos.`
      } else if (idade != 101) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
      }

    } else if (fsex[1].checked) {
      Gênero = 'Mulher'
      if (idade >= 0 && idade <= 3) {
        // bêbê
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        document.body.style.background = '#4e58ecb9'
        img.setAttribute('src', "photo-woman-site/bêbê-m-.png")
        res.innerHTML = `Detectamos uma    ${bb}   com ${idade} anos.`
      } else if (idade >= 4 && idade <= 10) {
        // criança
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        document.body.style.background = '#b90993'
        b90993
        img.setAttribute('src', "photo-woman-site/criança-m-.png")
        res.innerHTML = `Detectamos uma   ${cri}   com ${idade} anos.`
      } else if (idade >= 11 && idade <= 15) {
        // adolescente
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        document.body.style.background = '#b90909'
        img.setAttribute('src', "photo-woman-site/adolescente-m-.png")
        res.innerHTML = `Detectamos uma    ${ado}   com ${idade} anos.`
      } else if (idade >= 16 && idade <= 17) {
        // jovem
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        document.body.style.background = '#09b918'
        img.setAttribute('src', "photo-woman-site/jovem-m-.png")
        res.innerHTML = `Detectamos uma   ${jove}   com ${idade} anos.`
      } else if (idade >= 18 && idade <= 60) {
        // adulta
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        document.body.style.background = '#84b909'
        img.setAttribute('src', "photo-woman-site/adulta-m-.png")
        res.innerHTML = `Detectamos uma    ${adulta}   com ${idade} anos.`
      } else if (idade >= 61 && idade <= 100) {
        // idosa
        img.style.margin = 'auto';
        img.style.borderRadius = '90%'
        document.body.style.background = '#8b008b'
        img.setAttribute('src', "photo-woman-site/idosa-m-.png")
        res.innerHTML = `Detectamos uma    ${idosa}   com ${idade} anos.`
      
      } else if (idade != 101) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
      }
    }
    res.style.display = 'flex'; // Torna a div#res um contêiner flexível
    res.style.justifyContent = 'center'; // Centraliza horizontalmente
    res.style.textAlign = 'center'
    res.appendChild(img)
  }
}
