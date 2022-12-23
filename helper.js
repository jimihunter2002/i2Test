const dropDuplicateElem = arr => {
  // Drop duplicate elements.
  const newArr = [];
  arr.forEach(elem => {
    if (!newArr.includes(elem)) {
      newArr.push(elem); // adding unique element to array
    }
  });

  return newArr;
};

// this function returns array of the same number
const noDuplicate = (num, arr) => arr.filter(v => v === num);

// this function helps sort number in descending order
const compareNumber = (a, b) => b - a;

const sortedDedupArray = arr => {
  // this function returns sorted array in descending order
  const dedupArr = dropDuplicateElem(arr);
  const finalSortedArrayDesc = dedupArr.sort(compareNumber);
  console.log(finalSortedArrayDesc);
  return finalSortedArrayDesc;
};
module.exports = {
  sortedDedupArray,
  noDuplicate,
};
