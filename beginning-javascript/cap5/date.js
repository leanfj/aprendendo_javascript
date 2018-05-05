let data = new Date;

console.log(data);

//Numero em milisegundos passados desde 01/01/1970 00:00:00
console.log(Number(data));


let data2 = new Date('22 March 1986');

console.log(data2);

let data3 = new Date('Mar 22 1986');

console.log(data3);

let data4 = new Date(1986,2,22,6,0,0,0);

console.log(data4);

// Pegar valores de datas

// Dia do mês
console.log(data2.getDate());
//Dia da semana
console.log(data2.getDay());
//Mês
console.log(data2.getMonth());
//Ano
console.log(data2.getFullYear());
//Transforma em String
console.log(data2.toDateString());
