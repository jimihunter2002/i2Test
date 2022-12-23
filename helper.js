const dropDuplicateElem = arr => {
  // Drop them elements.
  const newArr = [];
  arr.forEach(elem => {
    if (!newArr.includes(elem)) {
      newArr.push(elem);
    }
  });

  return newArr;
};

const compareNumber = (a, b) => b - a;

const sortedDedupArray = arr => {
  const dedupArr = dropDuplicateElem(arr);
  const finalSortedArrayDesc = dedupArr.sort(compareNumber);
  console.log(finalSortedArrayDesc);
  return finalSortedArrayDesc;
};
module.exports = {
  sortedDedupArray,
};
