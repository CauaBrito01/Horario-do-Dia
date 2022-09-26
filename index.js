function ajustar_hotarario(){
    var horario_atual = window.document.getElementById('horario_atual')
    var imagem_horario = window.document.getElementById('imagem_horario')
    var agora = new Date()
    var horario = agora.getHours()
    horario_atual.innerHTML = `Agora são ${horario} horas`

    if (horario >=0 && horario <12){
        imagem_horario.innerHTML = '<img src="imagens/Amanhecer.jpg">'
        document.body.style.background = '#CEBD91'
    }

    else if (horario >=12 && horario <18){
        imagem_horario.innerHTML = '<img src="imagens/Entardecer.jfif">'
        document.body.style.background = '#996D59'
    }
        
    
    else{
        imagem_horario.innerHTML = '<img src="imagens/Anoitecer.jpg">'
        document.body.style.background = '#434545'
    }
}
