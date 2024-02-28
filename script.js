function fibonacci(num) {
    if (num <= 0) {
        return 0; // 0 is the first term of Fibonacci sequence
    } else if (num === 1) {
        return 1; // 1 is the second term of Fibonacci sequence
    } else {
        let prev = 0;
        let curr = 1;
        let next;

        for (let i = 2; i <= num; i++) {
            next = prev + curr;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}

module.exports = fibonacci;
