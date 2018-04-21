var grausFah = parseInt(prompt("Informe os graus em Fahrenheit", 212), 10);
var grausCent = 5 / 9 * (grausFah - 32);

document.write(grausFah + "\xB0 Fahrenheit são " + grausCent + "\xB0 centigrados<br/>");

if (grausCent == 100) {
    document.write("É o grau de ebolição da água");
}

if (grausCent < 0) {
    document.write("Agora a água começa a congelar");
}