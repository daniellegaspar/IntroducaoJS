// Imprimir nome junto com sobrenome (Gaspar) para cada integrante da família, com uma exceção, um integrante 
// tem sobrenome diferente 'Jeanne', coloque o sobrenome 'Oliveira'.

var nomes = ["Danielle", "Jefferson", "Lavínia", "Lucca", "Jeanne"]
    for (var i = 0; i < nomes.length; i++) {
        if (nomes[i] == "Jeanne"){
        console.log(nomes[i] + " Oliveira")
        continue
    }  
console.log(nomes[i] + " Gaspar")
}
