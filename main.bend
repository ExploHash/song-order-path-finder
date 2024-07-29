
def notesStringToNotesArray(notesString, acc, index):
  if !notesString[index]:
    return acc
  elif notesString[index + 1] == "#":
    return notesStringToNotesArray(notesString, acc + [notesString[index] + "#"], index + 2)
  else:
    return notesStringToNotesArray(notesString, acc + [notesString[index]], index + 1)

def index(array, value, index):
  if array[index] == value:
    return index + 1
  else:
    return -3

def abs(value):
  if value < 0:
    return value * -1
  else:
    return value

def calculateNoteDistance(noteA, noteB):
  notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
  distance = abs(index(notes, noteA, 0) - index(notes, noteB, 0));
  if notes > 6:
    return 12 - distance
  else:
    return distance

def calculateTuningDistance(tuningA, tuningB):
  return calculateNoteDistance(tuningA[0], tuningB[0]) + calculateNoteDistance(tuningA[1], tuningB[1]) + calculateNoteDistance(tuningA[2], tuningB[2]) + calculateNoteDistance(tuningA[3], tuningB[3])

def main():
    # Add config below
  songNames = [
    "Little Monster",
    "Loose Change",
    "How Did We Get So Dark",
    "Hole In Your Heart",
    "Out Of The Black",
    "Figure It Out",
  ]

  tunings = [
    "CADG", 
    "C#G#C#F#", 
    "CFA#D#", 
    "BF#BE", 
    "DGCF", 
    "EADG"
  ]

  arr = ['A', 'B']

  return index(arr, 'A', 0)