/********************************************************************************* 
 * Objetivo: Arquivo responsavel SOMENTE pelas entradas e saidas de dados
 * Data: 20/02/2026
 * Autor: Israel
 * Versão: 1.0
**********************************************************************************/

const calculosMatematicos = require('./model/calculo.js')


let n1 =

let n2 =

let operador = ''

let validar = calculosMatematicos.validarDados(n1, n2, operador)

if(validar){
    let resultado = calculosMatematicos.calcular(n1, n2, operador)

    if(resultado)
        console.log(resultado)
    else
        console.log('ERRO: Não foi possivel fazer o calculo')

}else{
    console.log('ERRO: Valiação de dados incorreta')
}

console.log(resultado)