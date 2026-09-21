const calculator = require('./calculator');

describe('calculator', () => {
    test('Add', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    test('Substract', () => {
        expect(calculator.substract(5, 2)).toBe(3);
    });
    test('Multiply', () => {
        expect(calculator.multiply(3, 2)).toBe(6);
    });
    test('Divide', () => {
        expect(calculator.divide(5, 2)).toBe(2.5);
    });
    test('NaN', () => {
        expect(calculator.substract(1, 'random')).toBeNaN();
    });
});