// 


function isodd(input){


}

let input 
//input=(input)
console.log(typeof(input))
isodd()

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Single input
rl.question("Enter your name: ", function(name) {
  console.log("Hello, " + name);

  // Multiple inputs
  rl.question("Enter numbers separated by space: ", function(input) {
    let numbers = input.split(' ').map(Number);
    console.log("Numbers:", numbers);

    rl.close();
  });
});

rl.on("close", function() {
  process.exit(0);
});
