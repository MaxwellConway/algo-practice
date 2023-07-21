function isBalanced(string) {
  let openBrackets = ["(", "{", "["];
  let closedBrackets = [")", "}", "]"];

  for (let i = 0; i < string.length; i++) {
    for (let x = 0; x < 3; x++) {
      if (openBrackets[x] == string[i]) {
        if (!string.includes(closedBrackets[x])) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
}

//   && closedBrackets[i] != string[i]) {
//     return false;
//   } else {
//     for (let x = i + 1; x < string.length; x++) {
//       if (closedBrackets.includes(string[x])) {
//       }
//     }
//   }
