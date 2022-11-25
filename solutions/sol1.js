
const prompt = require('prompt-sync')({sigint: true});

const score = parseInt(prompt('Enter a value between 0 and 100'));
function studentScore(score) {
    if(score> 79) {
        console.log('Grade: A')
    } 
    
    else if(score >=60) {
        console.log('Grade: B')
    } 
    
    else if(score >=49) {
        console.log('Grade: C')
    } 
    
    else if(score >=40 ) { 

        console.log('Grade: D')
    } 
    
    else if(score < 40) {
        console.log('Grade: E')
    }
};

studentScore(score);