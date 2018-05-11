 let listaNomes = [];
 let listaNomesEscrotos = ['Tyrannosaurus Rex Mullens', 'Zélia Tocafundo Pinto', 'Safada Da Sogra Vitorina', 'Oceano AtlânticoDa Silveira E Souza', 'Mister Love', 'Júlio Santos Pé-Curto', 'Jacinto Regoroxo'];
 let btnEnvia = document.getElementById('send');
 let inputNome = document.getElementById('nome');
 let exibeResultado = document.getElementById('resultado');


 function addNome() {
   if (inputNome.value != '') {
     //Inclui na lista o nome pego no valor do input
     listaNomes.push(inputNome.value);
     //limpa input
     inputNome.value = "";
     //Exibição da lista
     exibeLista();

   } else {
     listaNomes.push(listaNomesEscrotos[Math.floor(Math.random() * 8)]);
     //Exibição da lista
     exibeLista();
   }
 }


 function exibeLista() {
   //Ordenando lista e colocando na variável
   let listaOrdenada = listaNomes.sort();
   //Variável que será inserida no html
   let listaResultado = '';

   //Loop para verificar a lista ordenada e incrementar listaResultado
   for (let i = 0; i < listaOrdenada.length; i++) {
     listaResultado += listaOrdenada[i] + "<br/>";
   }

   //Inclusão de listaResultado no html apos loop de inclusão
   exibeResultado.innerHTML = listaResultado;

 }

 btnEnvia.addEventListener('click', addNome);