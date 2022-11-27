# Toy Problems
We are going to write code solutions for  three JavaScript programs. 
- Student Grade Generator
- Speed Detector
- Net Salary Calculator

### Getting Started 

Challenge 1: Student Grade Generator

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

At the home directory, we will have a directory named `toyProblems` to host our three projects. Therefore, run `cd` at the CLI to move to the home directory then  run the command `mkdir toyProblems`to create a directory named `toyProblems`.

At the CLI still, run `cd toyProblems` to move into our working directory. Inside the directory, run `mkdir solutions` to create a directory to host our three solutions. Run `cd solutions` to move into the `solutions` directory and create a  file named `sol1.js`.

To create the file, run `touch sol1.js `. Let's make use of our tools now! To start-up our project inside the VS Code, run `code .` . For our program to prompt the user to input the student score, we'll need to install the `prompt-sync` node module.

Therefore, run `npm install prompt-sync` in the vs code terminal. Before you proceed, make sure you have `node` and  `NVM` installed. 
     
            npm install prompt-sync

The `prompt-sync` module creates prompting functions that will prompt the user for input once called.

Once you’ve loaded the prompt-sync module and called it, use it to retrieve user input. Inside `sol1.js` have your first line of code as `const prompt = require('prompt-sync')();`

Declare a function that prompts the user to parse in an integer with a value between 0 and 100.
- `const score = parseInt(prompt("Enter a value between 0 and 100:"));`

Declare another function that takes in the student `score` as its parameter `function studentScore(score) {}`.

To prevent the user from entering a string or a value that is not an integer, use the `if` conditional statement to run 

                `if ( !Number.isInteger(score)) {
                console.log("Please enter an Integer!");
                }` 

                 and 

                `if (score > 100) {
                console.log("Please enter  a value less than or equal to 100!");
                }`
                
                to restrict a value that is greater than 100.

Then continue applying the if, else condition statement and at the end of the block of code, call the initial function that takes student score as its parameter.  To execute this, run 
`studentScore(score);`

The condition statements should be nested inside the `function studentScore(score){}`function.

Challenge 2: Speed Detector

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”.  Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

Our attempt here is to develop a solution to a program that is going to help monitor the speed of automobiles beyond the required driving limit `70km/hr` upto to some point where the driver's license is revoked.

Create a file named `sol2.js` in the same directory where we created our first `sol1.js`. To do this,  run the command `touch sol2.js`.

Just like in our first problem that required user prompt, we're equally going to write `const prompt = require('prompt-sync')();` as our fist line of code then declare a function that prompts, `Recorded speed` using the `const` keyword.
      
     ` const speed  = parseInt(prompt('Enter recorded speed:'));
`

After that, declared a function `function carSpeed(speed) {}`that takes speed as its parameter and nest the if, else condition statements inside it.

On the second statement, for the generator to print a value of one or above demerit point(s) for every 5 km above 70km limit, we subtract our speed  limit from the total speed recorded and divide the result by five to get either one or 12 points or even way far above 12 that withdraws the driver license.

At the end of the block of code call the function, `carSpeed(speed);`

You're good to go!