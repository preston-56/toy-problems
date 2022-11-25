// Speed detector

const speed  = parseInt(prompt('Enter recorded speed'));

function carSpeed(speed) {
    if  (speed <= 70) {
        console.log('OK')
    }

    else if (speed > 70) {
        const points = (speed - 70)/5

        if (points >= 12)
        console.log('License suspended')
    }
};
carSpeed(speed);