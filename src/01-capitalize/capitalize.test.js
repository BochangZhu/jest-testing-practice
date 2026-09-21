const capitalize = require('./capitalize');

describe('capitalize()', () => {
    test('Not capitalized', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
    test('Empty String', () => {
        expect(capitalize('')).toBe('');
    });
    test('Already capitalized', () => {
        expect(capitalize('Hello')).toBe('Hello');
    })
});
