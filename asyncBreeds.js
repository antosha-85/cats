// new working code
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    !error ? functionToRunWhenThingsAreDone(data)    : functionToRunWhenThingsAreDone(undefined);
  });
};
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};
breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetailsFromFile;