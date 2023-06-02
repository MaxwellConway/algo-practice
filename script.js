redShirtSpeeds = [1, 2, 3, 4, 5];
blueShirtSpeeds = [2, 3, 4, 5, 6];

fastest = true;

function something(array1, array2, fastest) {
  let tandemSpeed = 0;
  redShirtSpeeds.sort((a, b) => a - b);

  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
  }

  for (let i = 0; i < array.length; i++) {
    tandemSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }
  return tandemSpeed;
}
