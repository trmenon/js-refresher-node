const get_factorial=(number)=> {
    let iter = 1;
    let factorial = 1;
    while(iter<=number) {
        factorial*=iter;
        iter++;
    }

    return factorial;
}

module.exports = get_factorial;