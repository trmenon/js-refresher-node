const isArmstrong = require('./utils');

const get_armstrong_in_interval = (lower_limit, upper_limit) => {
    let display_str = '';
    for(let iter = lower_limit; iter<upper_limit; iter++) {
        if(isArmstrong(iter) === true) {
            display_str += iter +'/';
        }
    }
    console.log(`Generating all armstrongs between ${lower_limit} and ${upper_limit}`);
    console.log(display_str);
}

module.exports = get_armstrong_in_interval;