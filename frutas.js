// loop que verifique se a fruta contida na variável busca existe na lista de frutas do sacolão //

var listaDeFrutas = [ "Uva", "Banana", "Manga", "Cajá", "Pinha"]
var buscar = "Uva"
    for (var i=0; i<listaDeFrutas.length; i++) {
        if(listaDeFrutas[i] == buscar) {
            console.log("Sim, temos a fruta", buscar, " disponível!.")
        }
    }