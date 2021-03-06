# APRENDENDO JAVASCRIPT

Neste repositório estarei documento minha jornada para o aprendizado de Javascript.
Tomarei como base o conteudo disponibilizado pelo site [JavaScriptisSexy](http://javascriptissexy.com/how-to-learn-javascript-properly/).
Como definido pos eles terei dentre 7 a 8 semanas de estudo intenso para conseguir absover o necessario para parender javascript.
Documentarei o maior numero de informação possível para que esse tipo de conteúdo possa ajudar outras pessoas assim como acredito que vai me ajudar.

Me desejem sorte....

#### RECURSOS PARA O GUIA - DESENVOLVEDORES INICIANTES

LIVROS

* **Beginning JavaScript 5th Edition** (Guia de leituras baseadas neste livro)
* JavaScript and JQuery: Interactive Front-End Web Development 1st Edition (conteúdo bastante visual)

BLOG

* JavaScriptIsSexy.com (leitura de 4 artigos)

CURSOS ONLINE

* Codecademy.com (4 trilhas)
* CodeSchool.com (1 minicurso)

# SEMANAS

Week 1: Making a Website with HTML and CSS; Learn JavaScript Data Types, Functions, Control Flow, and Loops

* [x] Codecademy: Se você ainda não conhece HTML e CSS, complete [Learn HTML](https://www.codecademy.com/learn/learn-html) e [Learn CSS](https://www.codecademy.com/learn/learn-css) na Codecademy.
* [x] Codecademy: Em seguida, siga a pista [Make a Website](https://www.codecademy.com/pt-BR/learn/make-a-website) para criar seu primeiro website, usando o que você aprendeu acima.
* [x] Beginning JavaScript : Leia o Capítulo 1 (Introduction to JavaScript and the Web) e o Capítulo 2 (Data Types and Variables).
* [x] Beginning JavaScript : Leia o Capítulo 3 (Decisions, Loops, and ).
* [x] Beginning JavaScript : Leia o Capítulo 4 (Functions e escopo).OBS: Leitura adcionada para se adequar a nova edição do livro.
* [x] Codecademy: Siga através do [Introduction To JavaScript](https://www.codecademy.com/learn/introduction-to-javascript) na Codecademy. Especificamente, trabalhe com estas seções: “Introduction to JavaScript,” “Functions,” “‘For’ Loops in JavaScript,” “‘While’ Loops in JavaScript,” e “Control Flow.” Conteudo modificado conforme atualizado do Codecademy.

Week 2: Learn JavaScript Objects, the Browser Object Model (BOM), and Events; Learn jQuery

* [x] Beginning JavaScript: Read Chapter 5 (JavaScript — An Object- Based Language).
* [x] JavaScriptIsSexy.com: Read my article, [JavaScript Objects in Detail](http://javascriptissexy.com/javascript-objects-in-detail/)
* [x] Codecademy.com: ~~Work through the last three sections of the Codecademy JavaScript track: “Data Structures,” “Objects 1,” and “Objects 2.”.~~ Seção de Objetos na nova trilha de javascrpit aborda os assuntos.
* [ ] Beginning JavaScript: ~~Read Chapter 6~~ Alterado para Cap 08 (Programming the Browser).
* [ ] Beginning JavaScript: ~~Read Chapter 15 (JavaScript Frameworks), and stop just after you complete this section: “Digging Deeper Into jQuery”~~ Modificado para Cap 16: Jquery.
* [ ] Codecademy.com: Work through the entire jQuery Track on Codecademy.

## SEMANA 1

Conteúdo a ser elaborado: Criar site com HTML e CSS, aprender tipos de dados, funçoes, controle de fluxo e loops em JavaScript.

~~Beginning JavaScript : Leia o Capítulo 4 (Common Mistakes, Debugging, and Error Handling)~~

OBS.:Conteudo deste capitulo está espalhado pelos capitulos anteriores onde é abordado as melhores praticas com o código e o debug utilizando o chrome.

##### Anotações

Revisando basicamente o conteudo de Learn HTML e Learn CSS, estudamos a estrutaração de um documento HTML e tags básicas indicando paragrafos, quebras de linha, cabeçalhos, lista ordenadas e não ordenadas, links, tabelas e inclusão de imagens e vídeos. Iniciado o basico de CSS com seletores usando tag, classes e id's. Visto especificidade de seletores, estilização de multiplos seletores, seletores aninhados. Utilização de mais propriedade CSS e box model com modificações do box-sizing. Mais informações o sobre position, display e float. Modificação de propriedades de cores usando hexadecimal, hsl, rgb e aplicação de camada alpha para transparencia. Tipografia basica com modificações de fontes em tamanhos, peso e estilo. Importação de fontes. Introdução a propriedade GRID. Introdução ao framework Bootstrap.

Fazendo introdução aos conceitos de Javascript com o livro Beginning JavaScript 5th Edition.

#### Cap 1

Instruções sobre o parsing de um documento HTML e como pode ser interompido pelo acionamento de script posicionados em diferentes partes do documento e como adcionar javascript no HTML de forma externa e direto no documento.

#### Cap 2

Instruções sobre tipos de dados e variáveis, utilização de operadores básicos.
Suporte a dados como números, texto(string) e booleanos.
Declaração de variáveis para armazenamento de dados.
Operadores basicos de soma, subtração, divisão, multiplicação e atribuição.
Precedencia de operadores.
Concatenação de string e conversão de dados.
Declaração de arrays.
Realizando os exercícios propostos no final do cap temos uma "pegadinha" onde a informação coletada pelo comando prompt vem como texto e precisamos far o parseInt() para modifica para numeros e realizar as operações

#### Cap 3

Introdução a condicionais If, else if e else.

```javascript
if (condicional) {
  //bloco de execução;
} else if (condicional) {
  //bloco de execução;
} else {
  //bloco de execução;
}
```

Operadores de comparação.

```javascript
  == //igual a
  != //diferente de
  <= //menor ou igual a
  >= //maior ou igual a
  < // menor que
  > // maior que
```

Utilização de operadores lógicos.

```javascript
&& // AND
|| // OR
! //negação
```

Condicional switch

```javascript
switch (comparador) {
  case comparador:
    // bloco de execução
    break;
  case comparador:
    // bloco de execução
    break;
  default:
    // bloco de execução
    break;
}
```

Loop utilizando FOR

A utilização de variaveis de controle devem ser declaradas fora das estrutras de repetição.

```javascript
for (inicializador; condicional; incrmentar ou decrementar){
  // bloco de execução
}

for(contador in contavel){

}
for
```

Loop utilizando while

```javascript
var contador = 0;
while (contador <= 10) {
  console.log(contador);
  contador++;
}
```

Loop do while executa uma declaração até que o teste da condição for falsa (false)

```javascript
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

#### Cap 4

Declaração de funções

```javascript
function nomeDaFunction(parametro) {
  // bloco de execução
}

// Invocar function
nomeDaFunction(parametro);

// Calculo do valor de Fahrenheit para Centigrados
function paraCent(grausFah) {
  var grausCent = 5 / 9 * (grausFah - 32);
  return grausCent;
}
paraCent(212);
```

Utilização de agumentos e return são opcionais mais aconselháveis.
Melhor forma de imaginar o parametros são como simple variáveis
Escopo de variáveis - Escopo global e Escopo de function(Escopo local)

### CodeCademy: Learn Javascript

#### Variáveis

```javascript
// Declaração de constante imutável
const nomeVarialvel = "Leandro";

// Declaração de variavel
let outroNomeVariavel = 123;

// Interpolação de variavel no ES6
console.log(`Meu nome é ${nomeVariavel}`);
```

### Arrow functions

```javascript
const nomeDaFunction = () => {
  // Bloco de execução
};

const outraFunction = parametro => paremetro + paramentro;
// Caso tenho um parametro e uma linha no bloco de execução pode ser simplificada
```

### Iterators

[Documentação Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# SEMANA 2

### Cap 5

#### OBJETOS

##### ARRAYS

sort() - Ordernar arrays.

```javascript
let numeros = [1, 4, 6, 2, 3, 9, 5];

console.log(numeros.sort());
// 1, 2, 3, 4, 5, 6, 9
```

reverse() - Coloca array em ordem reversa.

```javascript
let numeros = [1, 4, 6, 2, 3, 9, 5];

console.log(numeros.reverse());
// 5, 9, 3, 2, 6, 4, 1
```

indexOf() - Posição dentro do Array

lastIndexOf() - Posição do último resultado no Array

every() - Procura se todos obedecem a condição

some() - Retorna true se somente um obedeçer a condição

filter() - Cria array com o filtro do que obedeceram a condição

forEach() - Assim como o loop for passa com cada elemento do arrays.

```javascript
let numeros = [1, 2, 3, 4, 5];
function dobra(value, indes, array) {
  let result = value * 2;
  console.log(result);
}
numero.forEach(dobra);
// 2
// 4
// 6
// 8
// 10
// 12
```

map() - Alem de passar por cada elemento do arraya pode ser armazenado em um novo array.

```javascript
let numeros = [1, 2, 3, 4, 5];
function dobra(value, indes, array) {
  let result = value * 2;
  return result;
  console.log(result);
}
let numerosDobrados = numero.forEach(dobra);
console.log(numerosDobrados);
// (6) [2, 4, 6, 8, 10, 12]
```

#### MATH

abs() - Numeros abasolutos

ceil() - Arredonda para cima

floor() - Arredonda para baixo

round() - Arredonda para cima se maior ou igual .5 e para baixo caso menor que .5

random() - Retorna um numero aleatorio entre 0 e 1

```javascript
Math.floor(Math.random() * 10);
//Retorna um numero aleatorio entre 1 a 10
```

pow() - potenciação

```javascript
console.log(Math.pow(2, 8));
// 256
```

#### NUMBERS

tofixed() - Fixa o numero de casas decimais somente entre 0 e 20 casas

Declaração

```javascript
let primeiroNumero = new Number(123);

let meuNumero = 123.456;
```

```javascript
let custoItem = 9.99;
let aposTaxa = custoItem * 1.075;

console.log(aposTaxa);
//10.73925
let valorReal = aposTaxa.toFixed(2);
console.log(valorReal);
//10.74
```

#### DATE

Declaração

```javascript
let data = new Date();
// 2018-05-05T03:31:15.903Z
console.log(Number(data));
//1525491075903
```

Atenção que a data solicitada será com o fuso horário definido no PC onde roda o script

Está informação da data e convertida de um numero de milisegundos com base na data de 01/01/1970

Pode ser declarada uma data especifica

```javascript
let data2 = new Date("22 March 1986");

let data3 = new Date("Mar 22 1986");

//Ano,mês,dia,horas,minutos,segundos,milisegundos
let data4 = new Date(1986, 2, 22, 6, 0, 0, 0);
```

#### Objetos

Declaração de objetos

```javascript
let meuObjeto = new Object();

let outroObjeto = {}; //Preferencia para esta.
```

Popular um objeto

```javascript
outroObjeto.primeiroNome = "Leandro";
outroObjeto.segundoNome = "Ferreira";

console.log(outroObjeto.primeiroNome);
// -> Leandro
console.log(outroObjeto.segundoNome);
// -> Ferreira
```

Declaração de metodos (functions);

```javascript
outroObjeto.bomDia = function() {
  console.log("Meu nome é " + this.primeiroNome + " " + this.segundoNome);
};
//this está referenciando ao objeto em questão, seria o mesmo que outroObjeto.primeiroNome

//chamada de metodos
outroObjeto.bomDia();
```

Criar e popular um objeto

```javascript
let pessoa = {
  primeiroNome: "Leandro",
  segundoNome: "Ferreira",
  quemSou: function() {
    console.log("Meu nome é " + this.primeiroNome + " " + this.segundoNome);
  }
};
//uso de virgula para separar propridade e : para declarar o valor
pessoa.quemSou();
```

Function com retorno de um objeto e parametros passados para objeto

```javascript
function criarPessoa(nome, sobrenome) {
  return {
    primeiroNome: nome,
    segundoNome: sobrenome,
    saudacao: function() {
      console.log("Meu nome é " + this.primeiroNome + " " + this.segundoNome);
    }
  };
}

let andreia = criarPessoa("andreia", "silva");

andreia.saudacao();
```

##### Criando Constructors

```javascript
function Pessoa(primeiroNome, segundoNome) {
  this.primeiroNome = primeiroNome;
  this.segundoNome = segundoNome;
}
//Note a utilização de maiusculo para nomear a function construtora
```

Metodos criados com auxilio do prototype do constructor pessoa. Poderia ser criados dentro do constructor. Serão compartilhados com todos os objetos criados.

```javascript
Pessoa.prototype.nomeCompleto = function() {
  return this.primeiroNome + " " + this.segundoNome;
};

Pessoa.prototype.saudacao = function(pessoa) {
  console.log(
    "Ola " + pessoa.nomeCompleto() + ". Me chamo " + this.nomeCompleto()
  );
};
```

Criando instâncias do constructor pessoa

```javascript
var fulano = new Pessoa("Fulano", "Tal");
var menina = new Pessoa("Menina", "Silva");

console.log(fulano.nomeCompleto());

fulano.saudacao(menina);
```

##### ES2015 class (Estudar +)

```javascript
class outraPessoa {
  constructor(primeiroNome, segundoNome) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
  }
  //metodos criados com auxilio do prototype do constructor pessoa. Poderia ser criados dentro do constructor. Serão compartilhados com todos os objetos criados.
  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }
  saudacao() {
    console.log(
      "Ola " + pessoa.nomeCompleto() + ". Me chamo " + this.nomeCompleto()
    );
  }
}
```

## Artigo Object in details JSisSexy

O que é um objeto - É uma lista não ordenada de dados primitivos armazenado em um par de chave-valor. Seu items são chamados de propriedades, functions quando armazenasdas são chamadas de métodos.

Propriedades podem ser nomeadas com String ou Numbers. Porem se for nomeada com Numbers so pode se acessada via bracket notation

```javascript
let idadeGrupo = { 30: "Adultos" };
console.log(idadeGrupo["30"]); //Adultos
```

Dados armazenados em propriedades de objetos são armazenados por referencia e não como uma alocação de uma variável comum.

```javascript
/*Armazenamento dado primitivo*/
let nome = "João";
let outroNome = nome;
nome = "Andre";

console.log(outroNome); //João
console.log(nome); //Andre

/*Armazenamento por referencia*/
let pessoa = { nome: "Leandro" };
let outraPessoa = pessoa;

pessoa.nome = "Carlos";

console.log(outraPessoa.nome); //Carlos
console.log(pessoa.nome); //Carlos
```

Duas formas mais comuns de criar objects

```javascript
let meuObjeto = {}; // Object literal

let outroObjeto = new Object(); //Object constructor
```

Patterns para criar Objects

#### Constructor Pattern

```javascript
function Fruta(argCor, argSabor, argNome, argLocal) {
  //Propriedades
  this.cor = argCor;
  this.sabor = argSabor;
  this.nome = argNome;
  this.local = argLocal;

  //Metodos
  this.mostraNome = function() {
    console.log("Isso fruta é um(a) " + this.nome);
  };

  this.localOrigem = function() {
    this.local.forEach(function(cadaLocal) {
      console.log("Essa fruta vem de " + cadaLocal);
    });
  };
}
```

#### Prototype Pattern

```javascript
function Fruta() {}

//Propriedades
Fruta.prototype.cor = "Amarelo";
Fruta.prototype.sabor = 7;
Fruta.prototype.nome = "Nome genérico";
Fruta.prototype.nativo = "Local generico";

//Métodos
Fruta.prototype.mostraNome = function() {
  console.log("Isso é uma " + this.nome);
};
```

O acesso a uma propriedade de um objeto tambem pode ser feito usando [].

```javascript
let livro = {
  capa: "Dura",
  paginas: 30
};

console.log(livro["paginas"]);
```

Propriedades próprias e herdadas.

Propriedades herdadas são definidas no prototipo do objeto e herdadas do prototype Object.
Propriedade própria é definica diretamente no objeto criado.

O operado `in` pode ser utilizado para verificar se o objeto possue a propriedade herdada ou própria, com um retorno de `True` ou `False`.

```javascript
let manga = {
  sabor: 7
};

console.log("sabor" in manga); // true
console.log("tamanho" in manga); // false

console.log("toString" in manga); //true . Herdado o Object.prototype
```

Para verificar somente as propriedade próprias podemo usar `hasOwnProperty`

```javascript
let manga = {
  sabor: 7
};

console.log(manga.hasOwnProperty("sabor")); // true
console.log(manga.hasOwnProperty("toString")); // false
```

Para acessar e enumerar um objeto podemos utilizar o loop `for` ou o `for/in`

```javascript
let livro = {
  capa: "Dura",
  paginas: 30
};

for (let cadaItem in livro) {
  console.log(cadaItem); //capa, paginas
}
```

Propriedade podem ser deletadas utilizando o operador `delete`. Propriedades herdadas não podem ser deletadas.

```javascript
let livro = {
  capa: "Dura",
  paginas: 30
};

delete livro.paginas;

for (let cadaItem in livro) {
  console.log(cadaItem); //Capa
}
```

Para a utilização de Objetos para transferencia de informação via HTTP devemos transformalos em string no envio e transforma-los denovo em objeto na recepção.

Podemos usar os metodos `JSON.stringfy(nomeDoObejto)` que sera tranformaso em string e a recepção da string deve ser tratada com `JSON.parse(variavel)`
