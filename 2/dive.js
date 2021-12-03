const fs = require('fs');
const directions = fs.readFileSync('./2/input.txt').toString().split('\n');

const testDirections = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

//Part 1
function diveDirection(array){
  let horiz = 0;
  let depth = 0;
  for(let i = 0; i < array.length; i++){
    let [direction, count] = array[i].split(' ');
    if(direction === 'forward'){
      horiz += parseInt(count);
    } else if(direction === 'down'){
      depth += parseInt(count);
    } else if(direction === 'up'){
      depth -= parseInt(count);
    }
  }
  return horiz * depth;
}

// console.log(diveDirection(directions));

//Part 2
function updatedDirection(array){
  let horiz = 0;
  let depth = 0;
  let aim = 0;
  for(let i = 0; i < array.length; i++){
    let [direction, count] = array[i].split(' ');
    if(direction === 'forward'){
      horiz += parseInt(count);
      depth = depth + (aim * count);
    } else if(direction === 'down'){
      aim += parseInt(count);
    } else if(direction === 'up'){
      aim -= parseInt(count);
    }
  }
  return horiz * depth;
}

// console.log(updatedDirection(directions));