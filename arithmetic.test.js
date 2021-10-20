/**
 * Unit tests for arithmetic.js functions
 */

const { mean, median, mode } = require('./arithmetic');

describe('Test mean', () => {

    test('mean of positive integers', () => {
        expect(mean([3])).toBe(3);
        expect(mean([1, 1, 3, 3])).toBe(2);
        expect(mean([1, 2, 3, 4])).toBe(2.5);
        expect(mean([7, 4, 2, 7, 9, 1])).toBe(5);
    });

    test('mean of positive and/or negative integers', () => {
        expect(mean([-1, 1])).toBe(0);
        expect(mean([-3, -4, -5])).toBe(-4);
        expect(mean([3, -4, 5])).toBe(4/3);
        expect(mean([-7, 4, 2, -7, 9, -1])).toBe(0);
    });
});

describe('Test median', () => {

    test('median of positive integers', () => {
        expect(median([3])).toBe(3);
        expect(median([1, 2, 3])).toBe(2);
        expect(median([3, 2, 1])).toBe(2);
        expect(median([1, 1, 3, 3])).toBe(2);
        expect(median([3, 3, 1, 1])).toBe(2);
        expect(median([1, 2, 3, 4])).toBe(2.5);
        expect(median([3, 2, 1, 4])).toBe(2.5);
        expect(median([7, 4, 2, 7, 9, 1])).toBe(5.5);
    });

    test('median of positive and/or negative integers', () => {
        expect(median([-3])).toBe(-3);
        expect(median([-1, -2, -3])).toBe(-2);
        expect(median([-3, -2, -1])).toBe(-2);
        expect(median([-1, 1, -3, 3])).toBe(0);
        expect(median([-3, 3, 1, -1])).toBe(0);
        expect(median([-1, -2, -3, -4])).toBe(-2.5);
        expect(median([3, 2, -1, -4])).toBe(0.5);
        expect(median([-7, -4, 2, 7, 9, -1])).toBe(0.5);
        expect(median([-7, -4, 7, 9, -1])).toBe(-1);
    });
});

describe('Test mode', () => {

    test('mode of positive and/or negative integers', () => {
        expect(mode([3])).toEqual([3]);
        expect(mode([1, 1, 3])).toEqual([1]);
        expect(mode([3, 1, 1])).toEqual([1]);
        expect(mode([1, 1, 3, 3])).toEqual([1, 3]);
        expect(mode([3, 3, 2, 1, 1])).toEqual([1, 3]);
        expect(mode([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(mode([3, 2, 1, 4])).toEqual([1, 2, 3, 4]);
        expect(mode([7, 4, 2, 7, 9, 1])).toEqual([7]);
        expect(mode([-3])).toEqual([-3]);
        expect(mode([-1, -2, -3])).toEqual([-3, -2, -1]);
        expect(mode([-3, -2, -1])).toEqual([-3, -2, -1]);
        expect(mode([-1, 1, -3, 3])).toEqual([-3, -1, 1, 3]);
        expect(mode([-3, 3, 1, -1])).toEqual([-3, -1, 1, 3]);
        expect(mode([-1, -2, -3, -4])).toEqual([-4, -3, -2, -1]);
        expect(mode([3, 2, -1, -4])).toEqual([-4, -1, 2, 3]);
        expect(mode([7, -4, 2, 7, 9, -1])).toEqual([7]);
        expect(mode([-7, -4, 7, 9, -1, -4, -1])).toEqual([-4, -1]);
    });
});