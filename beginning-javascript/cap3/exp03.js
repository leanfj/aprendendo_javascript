var numeroSecreto = parseInt(prompt('Escolha um numero de 1 a 5'));

switch (numeroSecreto) {
    case 1:
    case 2:
        document.write('Muito baixo<br/>');
        break;
    case 3:
        document.write('Você achou o numero secreto<br/>');
        break;
    case 4:
        document.write('Muito alto<br/>');
        break;
    case 5:
        document.write('Muito muito alto<br/>');
        break;

    default:
        document.write('Tem que digitar uma numero entre 1 e 5<br/>');
        break;
}

document.write('Codigo continua apos o teste do switch');