// Speed detector

const prompt = require('prompt-sync')();

const speed  = parseInt(prompt('Recorded speed:'));

function carSpeed(speed) {
    if  (speed <= 70) {
        console.log('OK')
    }

    else if (speed > 70) {
        const points = (speed - 70)/5; {
            console.log(` Demerit points: ${points}`)
        }

        if (points >= 12)
        console.log(' License suspended')
    }
};
carSpeed(speed);
