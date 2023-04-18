const first_n_iterator = (num)=> {
    for(let iter = 1; iter<=10; iter++) {
        if(iter>num) {
            break;
        }
        console.log(`Iteration ${iter}`);
    }

    console.log('Terminating module');
}

module.exports = first_n_iterator;