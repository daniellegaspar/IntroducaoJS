// Encontrar a carta "Rei" entre as cartas do baralho 

var baralho = ["Ás", "Dama", "Rei", "Valete"]
var buscar = "Rei"
for (var i = 0; i < baralho.length; i++){
    if(baralho[i] == buscar){
    console.log("Encontrei o Rei!")
    break
    }
}
