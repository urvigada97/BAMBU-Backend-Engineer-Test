const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, '../files/data.xlsx');

async function convertFile() {
  const data = await excelToJson({
    sourceFile: fileName,
    columnToKey: {
      A: 'name',
      B: 'age',
      C: 'latitude',
      D: 'longitude',
      E: 'monthlyIncome',
      F: 'experienced'
    }
  })['data'];
  // console.log(data);
  fs.writeFileSync(fileName.split('.')[0] + '.json', JSON.stringify(data));
}
convertFile();
module.exports = convertFile;
