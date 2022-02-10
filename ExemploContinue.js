// Usando o comando continue para imprimir todos os nomes e pular um nome //

var listaDeNomes = ['Lucca', 'Lavínia', 'Jefferson', 'Danielle']
for(var i =0; i < listaDeNomes.length; i++){
if(listaDeNomes[i] == 'Lucca'){
continue
//Quando o nome for Lucca, ele simplesmente passa para o próximo loop
}
console.log(listaDeNomes[i])
}
// Esse loop irá imprimir:
// Lavínia
// Jefferson
// Danielle