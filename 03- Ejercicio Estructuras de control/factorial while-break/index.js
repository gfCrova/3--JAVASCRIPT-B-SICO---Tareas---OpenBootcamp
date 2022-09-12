

// Factorial Bucle While con bifurcación if y break.


let num = 5;
let num2 = 11;
let result = 1;
let i = 0;

while (i < num2) {
    while (i < num) {
        console.log("El factorial de "+i +" = " +result);
        i++;
        result *= i;
        if (result == num){
            i = 0;
            break;
        }
    }
    console.log("El factorial de "+i +" = " +result);
    i++;
    result *= i;
    if (i == num2) {
        break;
    }
}