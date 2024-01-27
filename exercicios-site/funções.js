function carregar() {
  let msg = window.document.getElementById('msg')
  let img = window.document.getElementById('imagem')
  let data = new Date()
  let hora = data.getHours()

  let textHour = "horas"

  if (hora === 1) {
    textHour = "hora"
  }

  if (hora >= 0 && hora < 12) {
    // bom dia
    msg.innerHTML = `Bom dia! Agora são  Exatamente ${hora} ${textHour}`
    img.src = 'imagens-site/manhã-ed.png'
    document.body.style.background = '#8b008b'
  } else if (hora >= 12 && hora <= 18) {
    // boa tarde
    msg.innerHTML = ` Boa Tarde! Agora são  Exatamente ${hora} Horas`
    img.src = 'imagens-site/tarde-ed.png'
    document.body.style.background = '#3f8b00'
  } else {
    // boa noite
    msg.innerHTML = ` Boa Noite! Agora são  Exatamente ${hora} Horas`
    img.src = 'imagens-site/Noite-ed.png'
    document.body.style.background = '#8b7d00'
  }
}