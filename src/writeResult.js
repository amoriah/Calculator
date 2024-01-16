import { printNumber } from './methods.js';
import { data, doOperation } from './constants.js';

export const resInFirstOperand = (value = '') => {
    const hasTwoOperands = data.sign1 && data.secondOperand && !data.sign2;

    if (hasTwoOperands || data.equal) {
        printNumber(
            doOperation[data.sign1](+data.firstOperand, +data.secondOperand),
            'result'
        );
        data.firstOperand = data.result;
        data.result = '';
        data.secondOperand = '';
        data.sign1 = data.equal ? '' : value;
    }
};

export const resInSecondOperand = (value = '') => {
    data.secondOperand = doOperation[data.sign2](
        +data.secondOperand,
        +data.thirdOperand
    );
    data.thirdOperand = '';
    data.sign2 = value;
};
