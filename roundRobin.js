competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
results = [0, 0, 1];

function roundRobin(compArray, resultsArray) {
  const tournamentWinner = {
    teamName: "",
    score: 0,
  };

  const scores = {};

  for (let i = 0; i < competitions.length; i++) {
    const winnerId = results[i] === 0 ? 1 : 0;
    const matchWinner = competitions[i][winnerId];

    if (matchWinner in scores) {
      scores[matchWinner] += 3;
    } else {
      scores[matchWinner] = 3;
    }

    if (tournamentWinner.score < scores[matchWinner]) {
      tournamentWinner.teamName = matchWinner;
      tournamentWinner.score = scores[matchWinner];
    }
  }
  return tournamentWinner.teamName;
}

// {
//   let winnerArray = [];

//   for (let i = 0; i < resultsArray.length; i++) {
//     winnerArray[i] = compArray[i][resultsArray[i]];
//   }
//   let winner = null

//   for (let i = 0; i < winnerArray.length; i++) {
//     let winner = winnerArray[i];
//   }
//   return "Python"
// }

//compArray[i][0] compArray [i][1]
//resultsArray[i] = 0
//therefore
//compArray[i][resultsarray[i]]
//let winnerArray[i] = compArray[i][resultsarray[i]]
// let maxPoints = {
// }
// for (let i = 0; i < winnerArray.length; i++) {
//     if (maxPoints.winnerArray[i]){
//     maxPoints.winnerArray[i] += 3
//     }
//     else {
//         maxPoints.winnerArray[i] = 3
//     }
// }
