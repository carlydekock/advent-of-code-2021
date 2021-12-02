//Tip on how to read from text file here: https://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array

const fs = require('fs');
const measurements = fs.readFileSync('./day1/input.txt').toString().split('\n');

const measurementsTest = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

//Part 1
function sonar(array) {
  let numIncreasing = 0;
  for (let i = 1; i < array.length; i++) {
    let currentNum = parseInt(array[i]);
    let prevNum = parseInt(array[i-1]);
    if (currentNum > prevNum) {
      numIncreasing++;
    }
  }
  return numIncreasing;
}
// console.log(sonar(measurements));


//Part 2
function slidingWindow(array){
  let countIncreasing = 0;
  let prevSum = parseInt(array[0]) + parseInt(array[1]) + parseInt(array[2]);
  for(let i = 1; i < array.length - 2; i++){
    let currentSum = (parseInt(array[i]) + parseInt(array[i + 1]) + parseInt(array[i + 2]));
    if(currentSum > prevSum){
      countIncreasing++;
    }
    prevSum = currentSum;
  }
  return countIncreasing;
}
// console.log(slidingWindow(measurements));
