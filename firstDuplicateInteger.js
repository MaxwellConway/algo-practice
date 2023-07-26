function firstDuplicateInteger(arr) {
  let numTracker = [];
  for (let i = 0; i < arr.length; i++) {
    if (numTracker.includes(arr[i])) {
      return arr[i];
    } else {
      numTracker.push(arr[i]);
    }
  }
  return -1;
}

let array = [2, 1, 5, 6, 7, 3, 4];

firstDuplicateInteger(array);
