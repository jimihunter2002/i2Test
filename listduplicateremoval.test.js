const helper = require('./helper');

// assumptions made are that numbers were read into a list.
// no negative numbers
const testArr = [1, 10, 3, 8, 1, 9, 9, 100, 79, 100, 56];

describe('check', () => {
  test('duplicates are removed from arr', () => {
    const result = helper.sortedDedupArray[testArr];
    expect(results.length).toEqual(testArr.length - 2);
  });
  test('arr should only contain one instance of number 9', () => {
    // not implemented due to time constraint
  });
});
