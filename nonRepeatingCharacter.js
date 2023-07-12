input = "abcdcaf";

function nonRepeat(string) {
  let uniqueChars = [];
  for (i = 0; i < string.length; i++) {
    uniqueChars[i] = string.slice(i, i + 1);

    if (!string.includes(uniqueChars[i])) {
      return i;
    } else {
      return -1;
    }
  }
}

nonRepeat(input);
