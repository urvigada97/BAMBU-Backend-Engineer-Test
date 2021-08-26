// age, latitude, longitude, monthlyIncome
function getNumberRangeScore(n1, n2, min, max) {
  return Math.abs(1 - Math.abs(((n1 - n2) / (max - min))));
}

// experienced
function getExperiencedScore(n1, n2) {
  return (n1.toUpperCase() === n2.toUpperCase()) ? 1 : 0;
}

function getMinMaxValue(param, arr) {
  const sorted = arr.sort((a, b) => a[param] - b[param]);
  const min = sorted[0][param];
  const max = sorted[sorted.length - 1][param];
  return { min, max }
}

module.exports = {
  getNumberRangeScore,
  getExperiencedScore,
  getMinMaxValue
}