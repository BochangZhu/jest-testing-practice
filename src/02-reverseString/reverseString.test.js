const reverseString = require('./reverseString');

describe('reverseString()', () => {
    test('Normal reverse', () => {
        expect(reverseString('apple')).toBe('elppa');
    });
    test('Empty string', () => {
        expect(reverseString('')).toBe('');
    });
    test('Palindrome', () => {
        expect(reverseString('anna')).toBe('anna');
    });
});