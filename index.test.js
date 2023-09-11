import {
    capitalize, reverse,
    calculator
} from "./index.js"

describe('capatalizer', () => {
    test('Capitalize a lowercase string', () => {
        const result = capitalize('hello');
        expect(result).toBe('HELLO');
    });

    test('Capitalize an uppercase string', () => {
        const result = capitalize('WORLD');
        expect(result).toBe('WORLD');
    });

    test('Capitalize a mixed case string', () => {
        const result = capitalize('Hello World');
        expect(result).toBe('HELLO WORLD');
    });

})

describe('reverse', () => {
    it('returns the reversed string', () => {
        expect(reverse('hello')).toEqual('olleh');
    });

    it('returns an empty string when given an empty string', () => {
        expect(reverse('')).toEqual('');
    });

    it('returns the same string when given a single character', () => {
        expect(reverse('a')).toEqual('a');
    });

    it('returns the reversed string when given a string with spaces', () => {
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
