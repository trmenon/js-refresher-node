const prime_number_checker = (number) => {
    let factor_count = 0;
    for(let iter = 2; iter<=number; iter++) {
        if(number%iter === 0) {
            factor_count++;
        }
    }
    if(factor_count>1) {
        console.log(`${number} is not a prime number as it has ${factor_count+1} factors`);
    }else {
        console.log(`${number} is a prime number as it has only ${factor_count+1} factors`);
    }
}

module.exports = prime_number_checker;