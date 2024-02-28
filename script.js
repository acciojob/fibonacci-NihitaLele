function fibonacci(num) {
    if (num <= 0) {
        return 0; 
    } else if (num === 1 || num === 2) {
        return 1; 
    } else {
        let prevPrev = 0;
        let prev = 1;
        let curr = 1;

        for (let i = 3; i <= num; i++) {
            curr = prevPrev + prev;
            prevPrev = prev;
            prev = curr;
        }

        return curr;
    }
}

module.exports = fibonacci;