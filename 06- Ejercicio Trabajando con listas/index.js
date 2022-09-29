

// lista de compra

let compra = ["bebida", "carne", "verduras", "postre", "cereal"];

compra.push("Aceite de Girasol");
compra.pop();
console.log(compra);

// lista de peliculas (objects)

let movies = [
    { titulo: "Terminator", director: "James Cameron", fecha: 1984 },
    { titulo: "Fast & Furious 5", director: "Justin Lin", fecha: 2011 },
    { titulo: "Jurassic World", director: "Colin Trevorrow", fecha: 2015 }
]

let newMovies = movies.filter(obj => obj.fecha > 2010);
console.log(newMovies);


// lista que contiene los Directores de las peliculas

const listDirector = movies.map((obj) => `${obj.director}`);
console.log(listDirector);


// lista que contiene los Titulos de las peliculas

const listTitle = movies.map((obj) => `${obj.titulo}`);
console.log(listTitle);


// lista que concatena la lista de Directores y la lista de los Titulos ( usando concat)

const listConcat = listTitle.concat(listDirector);
console.log(listConcat);

// lista que concatena la lista de Directores y la lista de los Titulos ( usando propagación)

const listPropagacion = [...listTitle, ...listDirector];
console.log(listPropagacion);