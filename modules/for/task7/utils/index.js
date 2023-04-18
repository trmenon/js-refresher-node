const isPrime = (number) => {    
    let num_of_factors = 0;
    for(let iter = 1; iter<=number; iter++) {
        if(number%iter === 0) {
            num_of_factors++;
        }
    }
    const status = number < 2? true: num_of_factors>2? false: true;
    return status; 
}

module.exports = isPrime;