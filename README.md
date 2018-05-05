# APRENDENDO JAVASCRIPT

Neste repositório estarei documento minha jornada para o aprendizado de Javascript.
Tomarei como base o conteudo disponibilizado pelo site [JavaScriptisSexy](http://javascriptissexy.com/how-to-learn-javascript-properly/).
Como definido pos eles terei dentre 7 a 8 semanas de estudo intenso para conseguir absover o necessario para parender javascript.
Documentarei o maior numero de informação possível para que esse tipo de conteúdo possa ajudar outras pessoas assim como acredito que vai me ajudar.

Me desejem sorte....

#### RECURSOS PARA O GUIA - DESENVOLVEDORES INICIANTES

LIVROS
- **Beginning JavaScript 5th Edition** (Guia de leituras baseadas neste livro)
- JavaScript and JQuery: Interactive Front-End Web Development 1st Edition (conteúdo bastante visual)

BLOG
- JavaScriptIsSexy.com (leitura de 4 artigos)

CURSOS ONLINE 
- Codecademy.com (4 trilhas) 
- CodeSchool.com (1 minicurso)

## SEMANA 1 E 2

#### SEMANA 1

Conteúdo a ser elaborado: Criar site com HTML e CSS, aprender tipos de dados, funçoes, controle de fluxo e loops em JavaScript.

- [x] Codecademy: Se você ainda não conhece HTML e CSS, complete [Learn HTML](https://www.codecademy.com/learn/learn-html) e [Learn CSS](https://www.codecademy.com/learn/learn-css) na Codecademy.
- [x] Codecademy: Em seguida, siga a pista [Make a Website](https://www.codecademy.com/pt-BR/learn/make-a-website) para criar seu primeiro website, usando o que você aprendeu acima.
- [x] Beginning JavaScript : Leia o Capítulo 1 (Introduction to JavaScript and the Web) e o Capítulo 2 (Data Types and Variables).
- [x] Beginning JavaScript : Leia o Capítulo 3 (Decisions, Loops, and ).
- [x] Beginning JavaScript : Leia o Capítulo 4 (Functions e escopo).OBS: Leitura adcionada para se adequar a nova edição do livro.
- [x] Codecademy: Siga através do [Introduction To JavaScript](https://www.codecademy.com/learn/introduction-to-javascript) na Codecademy. Especificamente, trabalhe com estas seções: “Introduction to JavaScript,” “Functions,” “‘For’ Loops in JavaScript,” “‘While’ Loops in JavaScript,” e “Control Flow.” Conteudo modificado conforme atualizado do Codecademy.
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
switch(comparador){
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
while (contador <= 10){
  console.log(contador);
  contador++
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
function nomeDaFunction (parametro) {
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
const nomeVarialvel = 'Leandro';

// Declaração de variavel
let outroNomeVariavel = 123

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


#### SEMANA 2

Week 2: Learn JavaScript Objects, the Browser Object Model (BOM), and Events; Learn jQuery

- [ ] Beginning JavaScript: Read Chapter 5 (JavaScript — An Object- Based Language).
- [ ] JavaScriptIsSexy.com: Read my article, [JavaScript Objects in Detail](http://javascriptissexy.com/javascript-objects-in-detail/)
- [ ] Codecademy.com: Work through the last three sections of the Codecademy JavaScript track: “Data Structures,” “Objects 1,” and “Objects 2.”
- [ ] Beginning JavaScript: Read Chapter 6 (Programming the Browser).
- [ ] Beginning JavaScript: Read Chapter 15 (JavaScript Frameworks), and stop just after you complete this section: “Digging Deeper Into jQuery”.
- [ ] Codecademy.com: Work through the entire jQuery Track on Codecademy.



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
console.log(Math.pow(2,8));
// 256
```

#### NUMBERS
tofixed() - Fixa o numero de casas decimais somente entre 0 e 20 casas

Declaração
```javascript
let primeiroNumero = new Number (123);

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
let data = new Date;
// 2018-05-05T03:31:15.903Z
console.log(Number(data));
//1525491075903
```
Atenção que a data solicitada será com o fuso horário definido no PC onde roda o script

Está informação da data e convertida de um numero de milisegundos com base na data de 01/01/1970

Pode ser declarada uma data especifica
```javascript
let data2 = new Date('22 March 1986');

let data3 = new Date('Mar 22 1986');

//Ano,mês,dia,horas,minutos,segundos,milisegundos
let data4 = new Date(1986,2,22,6,0,0,0);

```


