const analyzeArray = require('./analyzeArray');

describe('analyzeArray()', () => {
    test('All positive numbers', () => {
        expect(analyzeArray([2, 4, 6, 8])).toEqual({
            average: 5,
            min: 2,
            max: 8,
            length: 4
        });
    });
    test('Include negative numbers', () => {
        expect(analyzeArray([-2, 2, 4, 6])).toEqual({
            average: 2.5,
            min: -2,
            max: 6,
            length: 4
        });
    });
    test('Empty array', () => {
        expect(analyzeArray([])).toEqual({});
    })
})