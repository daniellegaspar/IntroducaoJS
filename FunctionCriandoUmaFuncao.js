// Para crar uma função devemos seguir alguns passos simples: 
// 1º passo usar a palavra reservada function;
// 2º passo indicar um nome que faça sentido a função que será realizada;
// 3º passo após o nome é obrigatório o uso de parênteses () para indicar que essa função irá receber informações dentro da função, chamamos isso de parâmetro
// 4º passo após os parênteses colocaremos as chaves para indicar um bloco de código, é dentro desse bloco que indicaremos o que a 
// função irá fazer. Aqui vale: criar variáveis, condições e até loops
// A ideia é criar um passo a passo para o computador executar

function exibirnomefrutas() {
}
    var listaDeFrutas = ['Banana', 'Maçã', 'Uva', 'Laranja', 'Melancia']
    for (var i=0; i < listaDeFrutas.length; i++) {
        console.log('A fruta é: ' + listaDeFrutas[i])
    }
exibirnomefrutas()

