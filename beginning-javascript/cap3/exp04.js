var grausFah = [212, 32, -459.15];
var grausCent = [];
var contador;

for (contador = 0; contador <= 2; contador++) {
    grausCent[contador] = 5/9 * (grausFah[contador] - 32);
    console.log(grausCent[contador]);
}

for (contador = 2; contador >= 0; contador--) {
    document.write('Valor ' + contador + ' e ' + grausFah[contador] + ' gruas em Fahrenheit ');
    document.write('Isso é ' + grausCent[contador] + ' graus centigrados<br/>');
}