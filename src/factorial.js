function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        var result = 1;
        for (let i=1; i<n+1; i++) {
            result *= i;
        }
        return result;
    }
}

module.exports = factorial;