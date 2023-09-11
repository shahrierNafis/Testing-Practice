import {
    capitalize, reverse,
    calculator, caesarCipher
} from "./index.js"

describe('capatalizer', () => {
    test('capitalize  a lowercase string', () => {
        const result = capitalize('hello');
        expect(result).toBe('HELLO');
    });

    test('capitalize  an uppercase string', () => {
        const result = capitalize('WORLD');
        expect(result).toBe('WORLD');
    });

    test('capitalize  a mixed case string', () => {
        const result = capitalize('Hello World');
        expect(result).toBe('HELLO WORLD');
    });

})

describe('reverse', () => {
    test('returns the reversed string', () => {
        expect(reverse('hello')).toEqual('olleh');
    });

    test('returns an empty string when given an empty string', () => {
        expect(reverse('')).toEqual('');
    });

    test('returns the same string when given a single character', () => {
        expect(reverse('a')).toEqual('a');
    });

    test('returns the reversed string when given a string wtesth spaces', () => {
        expect(reverse('hello world')).toEqual('dlrow olleh');
    });
});

describe('calculator', () => {
    test('add method', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-2, 3)).toBe(1);
        expect(calculator.add(0, 0)).toBe(0);
    });

    test('subtract method', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(3, 5)).toBe(-2);
        expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('multiply method', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-2, 3)).toBe(-6);
        expect(calculator.multiply(0, 0)).toBe(0);
    });

    test('divide method', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(7, 2)).toBeCloseTo(3.5);
        expect(calculator.divide(0, 5)).toBe(0);
    });
});

describe('caesarCipher', () => {

    test('shift uppercase letters correctly', () => {
        expect(caesarCipher('ABC', 1)).toEqual('BCD');
        expect(caesarCipher('XYZ', 3)).toEqual('ABC');
    });

    test('shift lowercase letters correctly', () => {
        expect(caesarCipher('abc', 1)).toEqual('bcd');
        expect(caesarCipher('xyz', 3)).toEqual('abc');
    });

    test('wrap from z to a', () => {
        expect(caesarCipher('z', 1)).toBe('a');
        expect(caesarCipher('z', 2)).toBe('b');
        expect(caesarCipher('a', 26)).toBe('a');
    })

    test('keep the same case', () => {
        expect(caesarCipher('Aa', 1)).toBe('Bb');
    })

    test('handle non-alphabetic characters', () => {
        expect(caesarCipher('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
        expect(caesarCipher('123', 7)).toEqual('123');
    });



})