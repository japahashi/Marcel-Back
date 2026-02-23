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
    case "somar":
        resultado = valor1 + valor2
        break;
    case "subtrair":
        resultado = valor1 - valor2
        break
    case "multiplicar":
        resultado = valor1 * valor2
        break
    default:
        break;
   }
    
}
//Chamamndo fução para testar
let resultado = calcular(20, 10, "somar")

if(resultado){
    console.log(resultado)

}else{
    console.log("ERRO")
}