var x = parseInt(prompt("Digite a base do retangulo"));

var y = parseInt(prompt("Digite a altura do retangulo"));

class Retangulo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    calculaArea() {
        return this.x * this.y;
    }
}

objRet = new Retangulo(x, y);

alert("A area do retangulo é: " + objRet.calculaArea());