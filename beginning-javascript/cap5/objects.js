//Declaração de objetos

let meuObjeto = new Object();

let outroObjeto = {}; //Preferencia para esta.

//Popular um objeto

outroObjeto.primeiroNome = 'Leandro';
outroObjeto.segundoNome = 'Ferreira';

console.log(outroObjeto.primeiroNome);
// -> Leandro
console.log(outroObjeto.segundoNome);
// -> Ferreira

//Declaração de metodos (functions);

outroObjeto.bomDia = function(){
  console.log('Meu nome é ' + this.primeiroNome + ' ' + this.segundoNome );
}
//this está referenciando ao objeto em questão, seria o mesmo que outroObjeto.primeiroNome


//chamada de metodos
outroObjeto.bomDia();

//criar e popular um objeto
let pessoa = {
  primeiroNome: 'Leandro',
  segundoNome: 'Ferreira',
  quemSou: function(){
    console.log('Meu nome é ' + this.primeiroNome + ' ' + this.segundoNome);
  }
};
//uso de virgula para separar propridade e : para declarar o valor
pessoa.quemSou();

//Function com retorno de um objeto e parametros passados para objeto
function criarPessoa(nome, sobrenome) {
  return {
    primeiroNome: nome,
    segundoNome: sobrenome,
    saudacao: function () {
      console.log('Meu nome é ' + this.primeiroNome + ' ' + this.segundoNome);
    }
  };
}

let andreia = criarPessoa('andreia', 'silva');

andreia.saudacao();

//criando Constructors
function Pessoa(primeiroNome, segundoNome) {
  this.primeiroNome = primeiroNome;
  this.segundoNome = segundoNome;
}


//metodos criados com auxilio do prototype do constructor pessoa. Poderia ser criados dentro do constructor. Serão compartilhados com todos os objetos criados.
Pessoa.prototype.nomeCompleto = function () {
  return this.primeiroNome + ' ' + this.segundoNome;
};

Pessoa.prototype.saudacao = function (pessoa) {
  console.log('Ola ' + pessoa.nomeCompleto() + '. Me chamo ' + this.nomeCompleto());
};

//criando instâncias do constructo pessoa
var fulano = new Pessoa('Fulano', 'Tal');
var menina = new Pessoa('Menina', 'Silva');

console.log(fulano.nomeCompleto());

fulano.saudacao(menina);



//ES2015 class
class outraPessoa {
  constructor(primeiroNome, segundoNome) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
  }
  //metodos criados com auxilio do prototype do constructor pessoa. Poderia ser criados dentro do constructor. Serão compartilhados com todos os objetos criados.
  nomeCompleto() {
    return this.primeiroNome + ' ' + this.segundoNome;
  }
  saudacao() {
    console.log('Ola ' + pessoa.nomeCompleto() + '. Me chamo ' + this.nomeCompleto());
  }
}







