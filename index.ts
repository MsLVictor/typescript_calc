class Calculadora {
    primeiroNumero: number;
    segundoNumero: number;

    constructor(primeiroNumero: number, segundoNumero: number){
        this.primeiroNumero = primeiroNumero;
        this.segundoNumero = segundoNumero;
    }

    somar(): number{
        return this.primeiroNumero + this.segundoNumero;
    }
    subtrair(): number{
        return this.primeiroNumero - this.segundoNumero;
    }
    multiplicar(): number{
        return this.primeiroNumero * this.segundoNumero;
    }   
    dividir(): number{
        return this.primeiroNumero / this.segundoNumero;
    }   

}

const calculadora = new Calculadora(5, 3);
const resultadoMultiplicacao = calculadora.multiplicar();
console.log(resultadoMultiplicacao);