/****************************************************************************
 * Objetivo: Arquivo responsavel por gerar uma tabuada utilizada WHILE E FOR
 * Data: 25/02/2026
 * Autor: Marcel
 * Versão: 1.0
*/


const calculosMatematicos = require('./calculo.js')

//Função para imprimir a tabuada
const gerarTabuadaFor = function(tabuada){
    let tab = Number(tabuada)
    let resultado

    for(let cont = 0; cont<=10; cont++){
        //Processamento
        resultado = calculosMatematicos.multiplicar (cont, tab)
        console.log(tab + "x" + cont + "=" + resultado)

        
    }
}

gerarTabuadaFor(3)
