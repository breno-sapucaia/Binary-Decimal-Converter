
function toDecimal(){
    let binario = []
    let byte = [128,64,32,16,8,4,2,1]
    let decimal = 0

    binario = document.getElementById("binario").value.split('')
        
    for (let i in binario){
        let inteiro = parseInt(binario[i])
        if (inteiro > 1 || inteiro < 0){
        alert("O campo de byte só aceita zeros e uns. (0 e 1)")
        decimal = 'O campo acima só aceita 0 e 1'
        break    
        } else if(binario[i] == "1")
           decimal += byte[i]
       }
    document.getElementById("output").innerHTML = decimal
}

function toBinario(){
    let decimal = 0
    decimal = parseInt(document.getElementById("decimal").value)
    let byte = [128,64,32,16,8,4,2,1]
    let binario = []
    let i = 0
    let enquanto = 0
    let retorno = ""
    if(decimal > 255){
        alert('O valor insérido é maior que 1 byte')
        i = 8
    }
    do{
        if( byte[i]+enquanto > decimal){
            binario[i] = 0
        }else{
            enquanto += byte[i]
            binario[i] = 1   
        }
        i++
    }while( i < 8)
    i=0
    for(i in binario){
     retorno = retorno +""+(binario[i])
    }
    document.getElementById("output2").innerHTML = retorno
}

function infinito(){
    const campoInfinito = document.getElementById('valorBinario').value.split('')
    let qtd = campoInfinito.length - 1
    let valores =[] //base 2
    let binario = [] // binario inserido via teclado
    let contador = qtd 
    
    let decimal = 0

    //pegando valor digitado
    binario = document.getElementById("valorBinario").value.split('')

    //verificando a potencia
while(contador >= 0){
     valores[contador] = Math.pow(2,(qtd - contador))
    --contador
}
let a
    for(a in binario){
        let verificador = parseInt(binario[a])
        
        if(verificador > 1 || verificador < 0){
            alert('só é aceito digitos: 0 e 1')
            decimal = NaN
            break
        } else if(binario[a] == "1"){
            decimal += valores[a]
        }    
    }
    document.getElementById('output3').innerHTML = decimal
}

function bin() {
    let campo = document.getElementById('valorDecimal').value
    let divisao = 0;
    let resto = 0
    let binarioI = []
    let i = 0;

    while(campo != 0){
        resto = campo % 2
        binarioI[i] = resto
        divisao = Math.floor(campo / 2)
        campo = divisao
        i++ 
    }

    let qtd = binarioI.length

    let binarioC =[]
    i=-1
    while(qtd >=0){
        binarioC[qtd] = binarioI[i]
        i++
        qtd--
    }
    let b
    let retorno =""
    for(b in binarioC){
        if(binarioC[b] == undefined){
        retorno = retorno
        }else{
        retorno = retorno +""+(binarioC[b])
       }
       document.getElementById("output4").innerHTML = retorno
}

}





