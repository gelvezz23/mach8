const findPairs = (numbers, target) => {
  const formatNumbers = [...new Set(numbers)];
  const pairs = [];
  for (let i = 0; i < formatNumbers.length; i++) {
    for (let j = i + 1; j < formatNumbers.length; j++) {
      if (formatNumbers[i] + formatNumbers[j] === target) {
        pairs.push([formatNumbers[i], formatNumbers[j]]);
      }
    }
  }
  return pairs;
};

export default findPairs;
