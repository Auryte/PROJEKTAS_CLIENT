const findLastDotIndex = (description, maxCharacters) => {
  let lastDotIndex;
  for (let i = maxCharacters; i >= 0; i--) {
    if (description[i] === '.') {
      lastDotIndex = i;
      break;
    }
  }
  return lastDotIndex;
};

export const truncateText = (description, maxCharacters) => {
  if (description.length > maxCharacters) {
    const lastDotIndex = findLastDotIndex(description, maxCharacters);
    return description.slice(0, lastDotIndex) + '...';
  }
  return description;
};

export const truncatedTextRemainder =
(description, maxCharacters) => {
  if (description.length > maxCharacters) {
    const lastDotIndex = findLastDotIndex(description, maxCharacters);
    return description.slice(lastDotIndex + 1);
  }
  return null;
};

export const convertStringCharacters = (phrase) => {
  let returnString = phrase.toLowerCase();
  returnString = returnString.replace(/š/g, 's');
  returnString = returnString.replace(/ū/g, 'u');
  returnString = returnString.replace(/ų/g, 'u');
  returnString = returnString.replace(/ę/g, 'e');
  returnString = returnString.replace(/ė/g, 'e');
  returnString = returnString.replace(/ą/g, 'a');
  returnString = returnString.replace(/į/g, 'i');
  returnString = returnString.replace(/č/g, 'c');
  returnString = returnString.replace(/[^a-z0-9\s-]/g, '');
  returnString = returnString.replace(/[\s-]+/g, ' ');

  returnString = returnString.replace(/^\s+|\s+$/g, '');

  returnString = returnString.replace(/\s/g, '-');

  return returnString;
};
