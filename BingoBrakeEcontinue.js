// Verificar se existe o número sorteado na cartela

var cartela = [15, 23, 2, 5, 12, 36, 27, 30, 4, 1]
var numeroSorteado = 4 //número sorteado
    for(var i = 0; i < cartela.length; i++){
    if(cartela[i] == numeroSorteado){
        console.log('Encontrei o número Sorteado: ', numeroSorteado)
        break //para o loop assim que econtrar o número sorteado
    }
    }