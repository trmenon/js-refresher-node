const isPrime = require('./utils');

const prime_number_pattern_generator = (lower_limit, upper_limit) => {
    let disp_str = '';
    for(let iter = lower_limit; iter<=upper_limit; iter++) {
        if(isPrime(iter) === true) {
            disp_str += iter + '/';
        }
    }
    console.log(`Primes in the range: ${disp_str}`);
}

module.exports = prime_number_pattern_generator;
