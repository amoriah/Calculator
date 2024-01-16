import {
    data,
    simpleOperations,
    multipleOperations,
    sequence,
} from './constants.js';
import { clearData, equals, printNumber } from './methods.js';
import { resInFirstOperand, resInSecondOperand } from './writeResult.js';

export let out = document.querySelector('.input');

const checkParentheses = value => {
    const isBreakParentheses =
        data.sign2 && data.thirdOperand && simpleOperations.includes(value);

    const isContinueParentheses =
        data.sign2 && data.thirdOperand && multipleOperations.includes(value);

    if (isBreakParentheses || (isBreakParentheses && value === '=')) {
        resInSecondOperand();
    } else if (isContinueParentheses) {
        resInSecondOperand(value);

        return;
    }
    resInFirstOperand(value);
};

export const operation = value => {
    const isSign1 = !data.sign1 || !data.secondOperand;
    const isOperationInParantheses =
        data.sign1 &&
        data.secondOperand &&
        !data.thirdOperand &&
        simpleOperations.includes(data.sign1);

    if (isSign1) data.sign1 = value;
    if (multipleOperations.includes(value)) {
        if (isOperationInParantheses) {
            data.sign2 = value;
            return;
        }
    }
    checkParentheses(value);
};

document.querySelector('.calculator').onclick = event => {
    const clickElement = event.target.classList;
    const firstOperand = !data.firstOperand || !data.sign1 ? 1 : 0;
    const secondOperand =
        data.firstOperand && data.sign1 && !data.sign2 ? 2 : 0;
    const thirdOperand = data.secondOperand && data.sign2 ? 3 : 0;
    const operand = firstOperand || secondOperand || thirdOperand;

    switch (true) {
        case clickElement.contains('num'):
            if (data.equal === true) clearData();
            printNumber(event.target.textContent, sequence[operand]);
            break;
        case clickElement.contains('sign'):
            if (data.equal === true) data.equal = false;
            operation(event.target.textContent);
            break;
        case clickElement.contains('equals'):
            equals(!!thirdOperand);
            break;
        case clickElement.contains('C'):
            clearData();
            break;
    }
};
