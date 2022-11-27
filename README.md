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
     
                      `npm install prompt-sync`.

The `prompt-sync` module creates prompting functions that will prompt the user for input once called.

Once you’ve loaded the prompt-sync module and called it, use it to retrieve user input. Inside `sol1.js` have your first line of code as `const prompt = require('prompt-sync')();`

Declare a function that prompts the user to parse in an integer with a value between 0 and 100.
- `const score = parseInt(prompt("Enter a value between 0 and 100:"));`

Then declare another function that takes in the student `score` as its parameter `function studentScore(score) {}`.


    Challenge 2: Speed Detector

    Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


