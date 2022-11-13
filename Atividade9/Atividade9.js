var numeros = new Array(3);
numeros[0] = parseInt(prompt("Digite o primeiro numero: "));

numeros[1] = parseInt(prompt("Digite o segundo numero: "));

numeros[2] = parseInt(prompt("Digite o terceiro numero: "));

function maiorNumero (numeros){
    return Math.max.apply(null, numeros);
}
function ordArray (numeros){
    return numeros.sort(function(a,b){return a-b});
}

alert("Maior numero digitado: " + maiorNumero(numeros));
alert("Numeros em ordem crescente: " + ordArray(numeros));