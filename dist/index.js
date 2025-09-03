var Calculadora = /** @class */ (function () {
    function Calculadora(primeiroNumero, segundoNumero) {
        this.primeiroNumero = primeiroNumero;
        this.segundoNumero = segundoNumero;
    }
    Calculadora.prototype.somar = function () {
        return this.primeiroNumero + this.segundoNumero;
    };
    Calculadora.prototype.subtrair = function () {
        return this.primeiroNumero - this.segundoNumero;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.primeiroNumero * this.segundoNumero;
    };
    Calculadora.prototype.dividir = function () {
        return this.primeiroNumero / this.segundoNumero;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(5, 3);
var resultadoMultiplicacao = calculadora.multiplicar();
console.log(resultadoMultiplicacao);
//# sourceMappingURL=index.js.map