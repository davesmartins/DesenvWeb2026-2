
//document.getElementById("dvTeste").innerHTML = "MUDOU !!!!!"

var b = document.getElementById("btn")

function clickBotao(){
    var vIdade = document.getElementById("txtIdade")
    var vRes = document.getElementById("dvResultado")

    if (vIdade.value >= 18){
        //alert("Maior de Idade!")
        vRes.innerHTML = "Resultado: Maior de Idade!"
    }else{
        //alert("Menor de Idade!")
        vRes.innerHTML = "Resultado: Menor de Idade!"
    }
}

b.addEventListener("click", clickBotao)

