const caesarCipher = require('./caesarCipher');

describe('caesarCipher', () => {
  test('shifts forward', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
  });

  test('go over bound', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('negative shifts', () => {
    expect(caesarCipher('abc', -3)).toBe('xyz');
  });

  test('large shifts', () => {
    expect(caesarCipher('abc', 29)).toBe('def');
  });

  test('preserves non-letters', () => {
    expect(caesarCipher('Hello, World! 123', 3)).toBe('Khoor, Zruog! 123');
  });
});