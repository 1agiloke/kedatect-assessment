import doSort from "./answer1";
import getMax from "./answer2";
import getSum from "./answer3";

const { expect } = require('chai');
describe('Assessment 1 Unit Test', () => {
    it('Q1: Should Sort Array to Descending Order', () => {
        const inp = [1, 2, 4, 3, 5, 3, 2, 1];
        const expectedOut = [5, 4, 3, 3, 2, 2, 1, 1];
        expect(doSort(inp)).to.have.same.members(expectedOut);
    });
    
    it('Q2: Should find max sum of sub-array given the Array Set and Sub-array length', () => {
        const arr = [-3, 4, 0, -2, 6, -1];
        const subArrLength = 2;
        const expectedOut = 5;
        expect(getMax(arr, subArrLength)).equal(expectedOut);
    });

    it('Q3: Should find sum of even number value of a nested object', () => {
        const inp = {
            a: 2,
            b: {b: 2, bb: {b: 3, bb: {b: 2}}},
            c: {c: {c: 2}, cc: 'ball', ccc: 5},
            d: 1,
            e: {e: {e: 4}, ee: 'car'}
        };
        const expectedOut = 12;
        expect(getSum(inp)).equal(expectedOut);
    });
});
