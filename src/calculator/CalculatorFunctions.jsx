export const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
};

export function calculate(a, b, operator) {
    console.log(a, b, operator)
    return operations[operator]?.(a, b);
}
