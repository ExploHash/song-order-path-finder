const songsWithTunings = {
  "Little Monster": ["C", "A", "D", "G"],
  "Loose Change": ["C#", "G#", "C#", "F#"],
  "How Did We Get So Dark": ["C", "F", "A#", "D#"],
  "Hole In Your Heart": ["B", "F#", "B", "E"],
  "Out Of The Black": ["D", "G", "C", "F"],
  "Figure It Out": ["E", "A", "D", "G"]
}

const songsWithTuningsFull = {
  "Little Monster": ["C", "A", "D", "G"],
  "Loose Change": ["C#", "G#", "C#", "F#"],
  "How Did We Get So Dark": ["C", "F", "A#", "D#"],
  "Hole In Your Heart": ["B", "F#", "B", "E"],
  "Out Of The Black": ["D", "G", "C", "F"],
  "Figure It Out": ["E", "A", "D", "G"],
  "Bernard Trigger": ["B", "E", "A", "D"],
  "Come On Over": ["D", "A", "D", "G"],
  "Hook Line & Sinker": ["D", "A", "A", "D"],
}



function calculateNoteDistance(noteA, noteB) {
  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const distance = Math.abs(notes.indexOf(noteA) - notes.indexOf(noteB));
  return distance > 6 ? 12 - distance : distance;
}

function calculateTuningDistance(tuningA, tuningB) {
  return tuningA.reduce((acc, note, index) => acc + calculateNoteDistance(note, tuningB[index]), 0);
}

function checkIfArrayHasDoubles(array) {
  return new Set(array).size !== array.length;
}

function upPlayListIndexes(playListOfIndexes) {
  const length = playListOfIndexes.length;
  for (let i = 0; i < playListOfIndexes.length; i++) {
    playListOfIndexes[length - 1 - i]++;
    if (playListOfIndexes[length - 1 - i] === length) {
      playListOfIndexes[length - 1 - i] = 0;
    } else {
      break;
    }
  }
}

function calculateFullDistance(playListOfTunings) {
  return playListOfTunings.reduce((acc, tuning, index) => {
    if(index === 0) {
      return 0;
    }
    return acc + calculateTuningDistance(tuning, playListOfTunings[index - 1]);
  }, 0);
}

function logTuningsWithDistancesBetweenThem(playListOfTunings) {
  for (let i = 0; i < playListOfTunings.length - 1; i++) {
    console.log(`Distance between ${playListOfTunings[i]} and ${playListOfTunings[i + 1]} is: ${calculateTuningDistance(playListOfTunings[i], playListOfTunings[i + 1])}`);
  }
}


function main(songs) {
  let playListOfIndexes = Object.values(songs).map(() => 0);
  let lowestDistance = Infinity;
  while(true) {
    // TODO: needs something more efficient for counting
    upPlayListIndexes(playListOfIndexes);

    if(!checkIfArrayHasDoubles(playListOfIndexes)) {
      const playListOfTunings = playListOfIndexes.map((index) => Object.values(songs)[index]);
      const platListOfNames = playListOfIndexes.map((index) => Object.keys(songs)[index]);
      const fullDistance = calculateFullDistance(playListOfTunings);

      if(fullDistance < lowestDistance) {
        lowestDistance = fullDistance;
        console.log("New lowest distance: ", lowestDistance);
        console.log("New playlist: ", platListOfNames);
        console.log("New playlist tunings: ", playListOfTunings);
        logTuningsWithDistancesBetweenThem(playListOfTunings);
      }
    }
  }
  
}

main(songsWithTuningsFull);