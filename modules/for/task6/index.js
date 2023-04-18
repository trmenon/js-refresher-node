const hcf_finder = (num1, num2)=> {
    let iter = 1;
    let hcf = 0;
    const limit = num1<num2? num1: num2;
    for(iter=1; iter<=limit; iter++) {
        if(num1%iter === 0) {
            if(num2%iter === 0) {
                hcf = iter;
            }
        }
    }

    console.log(hcf);
}

module.exports = hcf_finder;