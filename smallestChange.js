// if 1 and if 3 then 2 is impossible
// if 1 and if 5 then 2-4 are impossible
// if 2 and if 5 then 1, 3, 4 are impossible

// sort array, anything less than the smallest number is impossible

let coins = [1, 2, 5]; // return 4

function bubbleSort(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
}

function smallestChange(array) {
  let maxChange = array.reduce((a, b) => a + b, 0);

  bubbleSort(array);

  if (array[0] > 1) {
    console.log(1);
  } else {
    for (let i = 0; i <= array.length; i++) {
    //   for (let x = 1; x <= maxChange; x++) {
    //     if (x ? array[i] : array[i] + array[i + 1]) {
    //       console.log(x);
    //     }
    //   }
if (array.includes(i))


    }
  }
}
