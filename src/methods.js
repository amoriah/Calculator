import { data } from './constants.js';
import { resInFirstOperand, resInSecondOperand } from './writeResult.js';
import { out } from './main.js';

export const clearData = () => {
    data.firstOperand = '';
    data.secondOperand = '';
    data.thirdOperand = '';
    data.sign1 = '';
    data.sign2 = '';
    data.result = 0;
    data.equal = false;
    out.value = '0';
};

export const isError = value => {
    const isError = (isNaN(value) || !isFinite(value)) && value !== '.';
    return isError ? 1 : 0;
};

export const equals = (isThirdOperand = false) => {
    data.equal = true;
    if (isThirdOperand) resInSecondOperand();
    resInFirstOperand();
};

export const printNumber = (value, operand) => {
    const isNeedRewrite = data[operand] === '0' && value !== '.';

    if (!isError(value)) {
        data[operand] = isNeedRewrite
            ? (data[operand] = value)
            : (data[operand] += value);
        out.value = data[operand];
    } else {
        out.value = 'ERROR';
    }
};
