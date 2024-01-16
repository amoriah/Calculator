export const data = {
    firstOperand: '',
    secondOperand: '',
    thirdOperand: '',
    sign1: '',
    sign2: '',
    result: 0,
    equal: false,
};

export const doOperation = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'x': (a, b) => a * b,
    '/': (a, b) => a / b,
};

export const simpleOperations = ['+', '-'];
export const multipleOperations = ['x', '/'];

export const sequence = {
    1: 'firstOperand',
    2: 'secondOperand',
    3: 'thirdOperand',
};
