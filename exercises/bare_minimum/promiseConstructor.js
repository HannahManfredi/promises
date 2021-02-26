/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let i = data.indexOf('\n');
        let firstline = data.toString().slice(0, i);
        resolve(firstline);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};

// Use the Promise constructor
// There are five steps to writing a promise-returning function:

// Create a promise with the new Promise constructor
// Do something async, then...
// Pass the successful value into the resolve function
// this value will be made available in the next then block
// only 1 value can ever be passed into resolve
// Pass any errors into the reject function
// this error will be made available in the catch block
// return the promise instance. This should be a synchronous step
//  Complete the exercises in bare_minimum/promiseConstructor.js and make the Promise constructor tests pass
// Commit your progress: "Complete bare_minimum/promiseConstructor.js exercises"