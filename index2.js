const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPasstimes } = require('./index');

nextISSTimesForMyLocation()
  .then((passtimes) => {
    printPasstimes(passtimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });