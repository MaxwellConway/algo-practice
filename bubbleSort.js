//bubble sort

// write a function that takes in an array of integers and returns a sorted version of that array. Use the bubble sort algorithm to sort the array.

const arr = [1, 3, 2, 7, 12, 5, 6];

// compare two numbers
// the greater number takes the higher index

// destructuring
//

function bubbleSort(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
}
