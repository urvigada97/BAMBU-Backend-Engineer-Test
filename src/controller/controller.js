require('dotenv').config();
const data = require('../files/data.json');
const { getNumberRangeScore, getExperiencedScore } = require('../utils/utils');

module.exports = async (req, res) => {
  console.log('Request received::', req.query);
  try {
    const age = req.query.age;
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const monthlyIncome = req.query.monthlyIncome;
    const experienced = req.query.experienced;

    const AGE_MIN = process.env.AGE_MIN;
    const AGE_MAX = process.env.AGE_MAX;
    const LATITUDE_MIN = process.env.LATITUDE_MIN;
    const LATITUDE_MAX = process.env.LATITUDE_MAX;
    const LONGITUDE_MIN = process.env.LONGITUDE_MIN;
    const LONGITUDE_MAX = process.env.LONGITUDE_MAX;
    const MONTHLY_INCOME_MIN = process.env.MONTHLY_INCOME_MIN;
    const MONTHLY_INCOME_MAX = process.env.MONTHLY_INCOME_MAX;

    data.forEach(element => {
      let totalScore = 0;
      let totalQueryParams = 0;
      if (age) {
        totalScore += getNumberRangeScore(age, element.age, AGE_MIN, AGE_MAX);
        totalQueryParams++;
      }
      if (latitude) {
        totalScore += getNumberRangeScore(latitude, element.latitude, LATITUDE_MIN, LATITUDE_MAX);
        totalQueryParams++;
      }
      if (longitude) {
        totalScore += getNumberRangeScore(longitude, element.longitude, LONGITUDE_MIN, LONGITUDE_MAX);
        totalQueryParams++;
      }
      if (monthlyIncome) {
        totalScore += getNumberRangeScore(monthlyIncome, element.monthlyIncome, MONTHLY_INCOME_MIN,
          MONTHLY_INCOME_MAX);
        totalQueryParams++;
      }
      if (experienced) {
        totalScore += getExperiencedScore(experienced, element.experienced);
        totalQueryParams++;
      }
      element.score = totalScore / totalQueryParams;
    });

    const sortedResults = data.filter((a) => a.score > 0).sort((a, b) => b.score - a.score)
      .slice(0, 10);
    res.send({ "peopleLikeYou": sortedResults });
  } catch (err) {
    console.log('Error occurred:: ', err);
  }
}