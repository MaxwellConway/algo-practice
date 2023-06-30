// given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you /cannot/ create. The given coins can have any positive integer value and aren't necessarily unique (you can have multiple of the same value).

//For example, if you are given coins = [1, 2, 5]
// return 4
// 1 = coins[0]
// 2 = coins[1]
// 3 = coins[0] + coins[1]
// 4 =/= coins[0]

//sort
// least to greatest

//// smallest change
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
      for (let x = 1; x <= maxChange; x++) {
        if (x ? array[i] : array[i] + array[i + 1]) {
          console.log(x);
        }
      }
    }
  }
}
//

//   for (let i = 1; i <= maxChange; i++)
//   {

//   }
