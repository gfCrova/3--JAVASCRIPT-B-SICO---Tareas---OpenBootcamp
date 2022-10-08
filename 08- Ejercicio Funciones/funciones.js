/*   Funcion sin parámetros   */

function miFunction() {
    return true;
}
console.log(miFunction());


/*    Función Asíncrona  */

const saludo = () => {console.log("Hola soy una promesa")};

const miPromesa = new Promise((resolve, reject) => {
    if (true) { 
        resolve();
    } else {
        reject();
    }
});

miPromesa
    .finally(() => console.log("SALUDO:"))
    .then(() => setTimeout(saludo, 5000))
    .catch(() => console.log("ERROR: no se puede leer el mensaje"))


/*    Función Generadora   */


function* indices(){
    let i = 0;
    while (true) {
        i += 2
        if (i >= 20){
            return i;
        }
        yield i;
    }
}

const obtener = indices();

console.log(obtener.next().value);
console.log(obtener.next().value);
console.log(obtener.next().value);
console.log(obtener.next().value);
console.log(obtener.next().value);
console.log(obtener.next().value);
console.log(obtener.next().value);
console.log(obtener.next().value);
console.log(obtener.next().value);
console.log(obtener.next().value);
console.log(obtener.next().value);
