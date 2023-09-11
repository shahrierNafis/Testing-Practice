
/**
 * Capitalizes a string.
 *
 * @param {string} string - The string to be capitalized.
 * @returns {string} - The capitalized string.
 */
export function capitalize(string) {
    // Convert the string to uppercase
    return string.toUpperCase();
}
/**
 * Reverses a given string.
 * 
 * @param {string} string - The string to be reversed.
 * @returns {string} - The reversed string.
 */
export function reverse(string) {
    // Split the string into an array of characters,
    // reverse the array, and join the characters back into a string.
    return string.split("").reverse().join("");
}
export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

/**
 * Encrypts a string using the Caesar cipher algorithm.
 * 
 * @param {string} string - The string to be encrypted.
 * @param {number} shift - The number of positions to shift each character.
 * @returns {string} - The encrypted string.
 */
export function caesarCipher(string, shift) {
    let result = '';
    let charcode;

    for (let i = 0; i < string.length; i++) {
        charcode = string[i].charCodeAt();

        // Uppercase
        if (charcode >= 65 && charcode <= 90) {
            // Wrap Z to A
            if (charcode + shift > 90) {
                charcode = 64 + (charcode + shift) % 90;
            } else {
                charcode += shift;
            }
        }
        // Lower case
        else if (charcode >= 97 && charcode <= 122) {
            // Wrap z to a
            if (charcode + shift > 122) {
                charcode = 96 + (charcode + shift) % 122;
            } else {
                charcode += shift;
            }
        }

        result += String.fromCharCode(charcode);
    }

    return result;
}
/**
 * Analyzes an array by calculating its average, minimum, maximum, and length.
 * 
 * @param {number[]} array - The array to be analyzed.
 * @returns {Object} - An object containing the calculated values.
 */
export function analyzeArray(array) {
    // Calculate the sum of all elements in the array
    const sum = array.reduce((a, b) => a + b, 0);

    // Calculate the average by dividing the sum by the number of elements
    const average = sum / array.length;

    // Find the minimum value in the array
    const min = Math.min(...array);

    // Find the maximum value in the array
    const max = Math.max(...array);

    // Get the length of the array
    const length = array.length;

    // Return an object containing the calculated values
    return {
        average,
        min,
        max,
        length
    };
}
analyzeArray([1, 8, 3, 4, 2, 6])
