export function capitalize(string) {
    return string.toUpperCase()
}

export function reverse(string) {
    return string.split("").reverse().join("")
}
export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}