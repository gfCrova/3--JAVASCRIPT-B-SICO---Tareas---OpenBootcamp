
const logger = require('./winston/logger');

const miFunc = (valor) => {
    if (typeof valor === 'number') {
        return `El resultado es: ` + valor * 4
    } else {
        throw new Error(`Error: Parámetro no válido`)
    }
}

try {
    const result = miFunc('10');
    console.log(result);
} catch (e) {
    console.log(e.message);
} finally {
    console.log(`Esto de imprime en pantalla siempre`);
}


logger.info("Esto es un mensaje de Info: " + JSON.stringify(this.info));
logger.warn("Esto es un mensaje de Warn: " + JSON.stringify(this.warn));
logger.error("Esto es un mensaje de Error: " + JSON.stringify(this.error));