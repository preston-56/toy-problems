const prompt = require("prompt-sync")();

const score = parseInt(prompt("Enter a value between 0 and 100:"));
function studentScore(score) {

    //  Integer salary input
 if ( !Number.isInteger(score)) {
    console.log("Please enter an Integer!");
  }

  if (score > 100) {
    console.log("Please enter  a value less than or equal to 100!");
  }

if (score > 79) {
  console.log("Grade: A");
} 

else if (score >= 60) {
  console.log("Grade: B");
} 

else if (score >= 49) {
  console.log("Grade: C");
} 

else if (score >= 40) {
  console.log("Grade: D");
} 

else if (score < 40) {
  console.log("Grade: E");
}
};

studentScore(score);
