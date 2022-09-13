
// Altura en Centímetros y en Metros

let alturaCent = 188;
let alturaMetros = 1.88;

// Peso en kg (flotante)

let pesoKg = 78.6;

// Var de Altura redondeada hacia arriba

let roundedAlt = Math.round(alturaMetros);
console.log(roundedAlt);

// Var de pesoKg redondeada hacia abajo

let roundedAtl2 = Math.floor(pesoKg);
console.log(roundedAtl2);

// Var si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript"

let max_valor_JSmas1 = Number.MAX_VALUE + 1;
let max_valor_JS = Number.MAX_VALUE;

let result = max_valor_JSmas1 === max_valor_JS;

console.log(max_valor_JSmas1, max_valor_JS);
console.log(result);
