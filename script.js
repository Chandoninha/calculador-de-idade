function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) >= ano) {
        msg.innerHTML = "[ERRO] Favor verificar os dados inserido."

    }
    else {
        msg.innerHTML = ""
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var verboAnos = ''
        var um = ''

         if(fsex[0].checked && idade <= 12){
            gênero = 'Menino'
            um = 'um'
        } else if(fsex[1].checked && idade <= 12){
            gênero = 'Menina'
            um = 'uma'
        }
        else if (fsex[0].checked){
            gênero = 'Homen'
            um = 'um'
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            um = 'uma'
        }
        if(idade == 1){
            verboAnos = 'ano'
        } else{
            verboAnos = 'anos'
        }
        
    res.style.textAlign= 'center'
    res.innerHTML = `Idade calculada, você é ${um} ${gênero} de ${idade} ${verboAnos} de idade.`
    }

    if(idade <= 2){
        img.src = 'bebe.png'
    } else if(fsex[0].checked && idade <=12 ){
        img.src = 'criancaMasculina.png'
    } else if(fsex[1].checked && idade <=12 ){
        img.src = 'criancaFeminina.png'
    } else if(fsex[1].checked && idade <=18 ){
        img.src = 'jovemFeminina.png'
    } else if(fsex[0].checked && idade <=18 ){
        img.src = 'jovemMasculino.png'
    } else if(fsex[0].checked && idade <=30 ){
        img.src = 'adultoMasculino.png'  
    } else if(fsex[1].checked && idade <=30 ){
        img.src = 'adultoFeminino.png'
    } else if(fsex[1].checked && idade <=60 ){
        img.src = 'adultoFemininoVelho.png'
    } else if(fsex[0].checked && idade <=60 ){
        img.src = 'adultoMasculinoVelho.png'  
    } else if(fsex[0].checked && idade <=89 ){
        img.src = 'velhoMasculino.png'  
    } else if(fsex[1].checked && idade <=89 ){
        img.src = 'velhaFeminino.png'
    }
    else {
        img.src = 'morto.png'
    }
}
