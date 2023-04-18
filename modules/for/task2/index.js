const get_factorial = (number)=> {
    let fact = 1;
    for(let iter = 1; iter<=number ; iter ++) {
        fact*=iter
    }
    console.log(`Factorial of ${number} : ${fact}`);
}

module.exports = get_factorial;