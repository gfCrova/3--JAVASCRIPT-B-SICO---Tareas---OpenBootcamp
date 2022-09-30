

const fechaHoy = new Date();

console.log(fechaHoy);


const fechaDeNacimiento = new Date(1995, 0, 12);
fechaDeNacimiento.getTime();
console.log(fechaDeNacimiento);


const fechaMayor = fechaHoy.getTime() > fechaDeNacimiento.getTime();
console.log(fechaHoy);


const day = fechaDeNacimiento.getDate();
console.log(day);

const month = fechaDeNacimiento.getMonth() + 1;
console.log(month);

const year = fechaDeNacimiento.getFullYear();
console.log(year);