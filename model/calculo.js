/********************************************************************************* 
 * Objetivo: Arquivo responsavel pelo processamento de calculos matematicos (SOMAR, SUBTRAIR,
 * MULTIPLICAR E DIVIDIR)
 * Data: 20/02/2026
 * Autor: Israel
 * Versão: 1.0
**********************************************************************************/
//toLowerCase() -> retorna uma String em minusculo
//toUppercase() -> retorna uma String em maisculo


//Exemplo de função anônima

//Função para calcular as 4 operações matemáticas
const calcular = function(numero1, numero2, operador){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operadorMatematico = String(operador).toUpperCase()

    let resultado
    /*
    if(operadorMatematico == "SOMAR"){
        resultado = valor1 + valor2

    }else if(operadorMatematico == "SUBTRAIR"){
        resultado = valor1 - valor2

    }else if(operadorMatematico == "MULTIPLICAR"){
        resultado = valor1 * valor2

    }else if(operadorMatematico == "DIVIDIR"){
        resultado = valor1 / valor2

    }else{
        return false

    }
    
    if(resultado != undefined){
        return resultado

    }else{
        return false
    } */
   switch (operadorMatematico) {
    case "SOMAR":
        resultado = somar(valor1, valor2)
        break;
    case "SUBTRAIR":
        resultado = subtrair(valor1, valor2)
        break;
    case "MULTIPLICAR":
        resultado = multiplicar (valor1, valor2)
        break;
    case "DIVIDIR":
        resultado = dividir (valor1, valor2)
        break;
   }
        return resultado
}
//Função baseada em formato de seta (ARROW FUNCTION)
const somar = (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair = (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar = (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir = (numero1, numero2) => Number(numero1) / Number(numero2)

module.exports = {
    calcular,
    somar,
    subtrair,
    multiplicar,
    dividir
}