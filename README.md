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
