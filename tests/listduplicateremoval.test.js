const helper = require('../helper');

const testArr = [1, 10, 3, 8, 1, 9, 9, 9, 100, 79, 100, 56]; // test data

describe('check', () => {
  test('duplicates are removed from arr', () => {
    const result = helper.sortedDedupArray(testArr);
    expect(result.length).toEqual(testArr.length - 3);
  });

  test('arr should only contain one instance of number 9', () => {
    const uniqueArray = helper.sortedDedupArray(testArr);
    const numFrequencyArr = helper.noDuplicate(9, uniqueArray);
    expect(numFrequencyArr.length).toEqual(1);
  });
});
