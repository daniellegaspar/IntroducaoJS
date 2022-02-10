// Usando o comando break para, parar a buscar assim que encontrar o nome

var listaDeNomes = ['Lucca', 'Lavínia', 'Jefferson', 'Danielle']
var buscar = 'Lavínia'
    for(var i = 0; i < listaDeNomes.length; i++){
    if(listaDeNomes[i] == buscar){
        console.log('Encontrei o nome ', buscar)
        break
    }
    }