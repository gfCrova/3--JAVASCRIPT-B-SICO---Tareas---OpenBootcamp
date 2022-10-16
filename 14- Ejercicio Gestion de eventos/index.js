
const boton = document.getElementById('btn');

boton.addEventListener('click', () => {
    alert("Click en el botón");
});

$(() => {
    $("#jquery").click(() => {
        console.log("Hola estoy utilizando JQuery");
    });
});
