const factorial = require('./factorial');

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