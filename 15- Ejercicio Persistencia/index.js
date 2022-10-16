
let nombre = "Gian Franco";
let apellido = "Crova";

const persona = {
    nombre,
    apellido
}
console.log(persona);

sessionStorage.setItem("persona", JSON.stringify(persona)); //comentando
localStorage.setItem("persona", JSON.stringify(persona)); // comentando

const minutes = new Date()
document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(minutes.getTime() + 2 * 60000)}`;

console.log(document.cookie);

