const factorial = require('./factorial');

describe("Factorial calculation - check for correct results inside the number scope the page allows:",()=>{
    test('0! should equal 1', () => {
        expect(factorial(0)).toBe(1);
    })

    test('1! should equal 1', () => {
        expect(factorial(1)).toBe(1);
    })

    test('2! should equal 2', () => {
        expect(factorial(2)).toBe(2);
    })

    test('3! should equal 6', () => {
        expect(factorial(3)).toBe(6);
    })

    test('4! should equal 24', () => {
        expect(factorial(4)).toBe(24);
    })

    test('5! should equal 120', () => {
        expect(factorial(5)).toBe(120);
    })

    test('6! should equal 720', () => {
        expect(factorial(6)).toBe(720);
    })

    test('7! should equal 5040', () => {
        expect(factorial(7)).toBe(5040);
    })

    test('8! should equal 40320', () => {
        expect(factorial(8)).toBe(40320);
    })

    test('9! should equal 362880', () => {
        expect(factorial(9)).toBe(362880);
    })

    test('40! should equal 8.159152832478977e+47', () => {
        expect(factorial(40)).toBe(8.159152832478977e+47);
    })
})

describe("Factorial calculation - check results outside the number scope the page allows:",()=>{
    test('Very big numbers (>170) should return infinity instead of crashing the page/script', () => {
        expect(factorial(171)).toBe(Infinity);
    })
    test('Negative numbers should return undefined', () => {
        expect(factorial(-39)).toBe(undefined);
    })
})