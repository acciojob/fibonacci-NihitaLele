function fibonacci(num) {
    if (num <= 0) {
        return 0; 
    } else if (num === 1) {
        return 1; 
    } else {
        let fib = []; 
        fib[0] = 0;
        fib[1] = 1;

        for (let i = 2; i <= num; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        return fib[num];
    }
}

module.exports = fibonacci;
