

const misDatos = { 
    nombre: "Gian Franco", 
    apellido: "Crova", 
    edad: 27, 
    altura: 1.82, 
    eresDesarrollador: true };

var miEdad = misDatos.edad;
console.log(miEdad);


const amigo1 = { 
    nombre: "Julieta", 
    apellido: "Valverde", 
    edad: 25, 
    altura: 1.70,
    eresDesarrollador: false
}

const amigo2 = { 
    nombre: "Esteban", 
    apellido: "Diaz", 
    edad: 28, 
    altura: 1.76,
    eresDesarrollador: false
}

const lista = [ misDatos, amigo1, amigo2 ]

lista.sort((a, b) => b.edad - a.edad);

console.log(lista);

