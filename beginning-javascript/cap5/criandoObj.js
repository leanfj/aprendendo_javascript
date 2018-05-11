class Pessoa {
  constructor(argPrimeiroNome, argSegundoNome, argIdade) {
    this.primeiroNome = argPrimeiroNome;
    this.segundoNome = argSegundoNome;
    this.idade = argIdade;
  }
  nomeCompleto() {
    return (this.primeiroNome + ' ' + this.segundoNome);
  }
}
let lucas = new Pessoa('Lucas', 'Bento', 2);

console.log(lucas);
console.log(lucas.nomeCompleto());