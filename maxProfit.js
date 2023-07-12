let prices = [7, 1, 5, 3, 6, 4];

function maxProfit(days) {
  let dayDifferences = [];
  maxProfit = 0;
  for (i = 0; i < days.length; i++) {
    for (x = 1; x < days.length; x++) {
      dayDifferences[i] = days[i] - days[i + x];
    }
  }
  for (i = 0; i < dayDifferences.length; i++) {
    if (dayDifferences[i] < maxProfit) {
      maxProfit = dayDifferences[i];
    }
  }
  maxProfit * -1;
  return maxProfit;
}
