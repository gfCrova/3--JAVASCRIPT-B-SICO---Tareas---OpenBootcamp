
function fibonacci(num){

    if(num == 0) {
        return [0, 1];
    } else {
        let s = fibonacci(num -1);
        s.push(s[s.length - 1] + s[s.length - 2])
        return s;
    }
}

console.log(fibonacci(10));