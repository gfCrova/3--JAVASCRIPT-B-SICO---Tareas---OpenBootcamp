
class Estudiante {

    _nombre;
    _asignaturas = ["Javascript", "HTML", "CSS"];

    obtenDatos(nombre, asignaturas) {
            this._nombre = nombre;
            this._asignaturas = asignaturas;
    }
}

// Nuevas Instancias de la clase Estudiante

const estudiante_1 = new Estudiante();
estudiante_1.obtenDatos("Ludmila", ["React", "Angular", "Vue"]);
console.log(estudiante_1);


const estudiante_2 = new Estudiante();
estudiante_2.obtenDatos("Gustavo", ["Java", "Spring Boot"]);
console.log(estudiante_2);


// Herencia de la clase Estudiante

class Programador extends Estudiante {
    _orientacion;
    obtenDatos(nombre, asignaturas, orientacion) {
        super.obtenDatos(nombre, asignaturas, orientacion);
        this._orientacion= orientacion;
    }
}

// Nueva Instancia de la clase Programador Heredada de la clase Estudiante

const programador_1 = new Programador();
programador_1.obtenDatos("Sebastian", ["PHP", "MySQL", "Base De Datos"], "Backend");
console.log(programador_1);