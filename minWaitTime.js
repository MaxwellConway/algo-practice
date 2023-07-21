let queries = [3, 2, 1, 2, 6]

//wait time is sum of previous elements

//which sorting of the array will yield the lowest total wait time

// want the largest number up front, second largest to be last



function minWaitTime(arr) {
    let minTime = 0
     for (let i = 0; i <= arr.length; i++) {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

    let firstHighestValue =
    let secondHighestValue =

}