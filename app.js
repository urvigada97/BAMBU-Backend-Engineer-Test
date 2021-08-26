require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
const { getMinMaxValue } = require('./src/utils/utils');
const data = require('./src/files/data.json');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

let ageMinMax = getMinMaxValue('age', data);
process.env.AGE_MIN = ageMinMax.min;
process.env.AGE_MAX = ageMinMax.max;

let latitudeMinMax = getMinMaxValue('latitude', data);
process.env.LATITUDE_MIN = latitudeMinMax.min;
process.env.LATITUDE_MAX = latitudeMinMax.max;

let longitudeMinMax = getMinMaxValue('longitude', data);
process.env.LONGITUDE_MIN = longitudeMinMax.min;
process.env.LONGITUDE_MAX = longitudeMinMax.max;

let monthlyIncomeMinMax = getMinMaxValue('monthlyIncome', data);
process.env.MONTHLY_INCOME_MIN = monthlyIncomeMinMax.min;
process.env.MONTHLY_INCOME_MAX = monthlyIncomeMinMax.max;

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});