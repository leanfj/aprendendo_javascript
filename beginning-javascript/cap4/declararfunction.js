function paraCent (grausFah) {
  var grausCent = 5 / 9 * (grausFah - 32);
  return grausCent;
}

console.log(paraCent(212));


function boasVindas (usuario) {
  console.log('Seja muito bem vindo, ' + usuario);
}

boasVindas('Leandro');

function boasVindasIdade (usuario, idade) {
  console.log('Seja muito bem vindo, ' + usuario + '\n', 'Sua idade é ' + idade);
}

boasVindasIdade('Leandro', 32);