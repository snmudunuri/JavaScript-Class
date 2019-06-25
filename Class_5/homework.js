function charCount(value) {
  let lengthOfString = value.length;
  const charCountObject = {};
  for (let i = 0; i < lengthOfString; i++) {
    let current = value.charAt(i);
    if (charCountObject[current]) {
      charCountObject[current] = charCountObject[current] + 1;
    } else {
      charCountObject[current] = 1;
    }
  }
  return charCountObject;
}
