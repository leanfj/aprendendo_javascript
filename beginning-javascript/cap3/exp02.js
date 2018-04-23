var minhaIdade = parseInt(prompt('Entre com sua idade'));

if (minhaIdade >= 0 && minhaIdade <= 10) {
    document.write('Minha idade esta entre 0 e 10 <br/>');
}

if (!(minhaIdade >= 0  && minhaIdade <= 10)) {
    document.write('Minha idade não está entre 0 e 10<br />');
}

if (minhaIdade >= 80 || minhaIdade <= 10  ) {
    document.write('minha idade é menor que 80 ou maior que 10<br />');
}

if ((minhaIdade >= 30 && minhaIdade <= 39) || (minhaIdade >= 80 && minhaIdade <= 89)) {
    document.write('minha idade está entre 30 e 39 ou minha idade está entre 80 e 89')
}