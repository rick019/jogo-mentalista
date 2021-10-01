function Chutar(){
// sortear um número aleatorio secreto
let numeroSecreto = 3

// pegar o número digitado e converter para inteiro
let chute = parseInt (document.querySelector("#valor").value)
console.log(numeroSecreto , chute)

/**
 * * OPERADORES RELACIONAIS
 * * < -- menor
 * * > -- maior
 * * <= -- menor ou igual
 * * >= -- maior ou igual
 * * = -- igual 
 *  * != --> diferente

    
 */
// comparar o número digitado com o número aleatório
if (numeroSecreto == chute){
// se tiver corretos e os números forem iguais, mostrar a mensagem que a pessoa acertou
document.querySelector(".resultado").innerHTML = "Você acertou"
}
else
{
// se tiver errado e os números forem dieferentes, mostrar a mensagem que a pessoa errou
document.querySelector(".resultado").innerHTML = "Você errou"
}

}