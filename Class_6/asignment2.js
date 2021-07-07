function clearDups(inpArray) {
  let clearedDupsArray = [];
  let lenOfArray = inpArray.length;
  for (let i = 0; i < lenOfArray - 1; i++) {
    if (inpArray[i] == inpArray[i + 1]) {
      continue;
    }
    clearedDupsArray.push(inpArray[i]);
  }
  if (
    clearedDupsArray[clearedDupsArray.length - 1] != inpArray[lenOfArray - 1]
  ) {
    clearedDupsArray.push(inpArray[lenOfArray - 1]);
  }
  return clearedDupsArray;
}
