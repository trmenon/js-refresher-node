const continue_demonstrator = (number)=> {
    for(let iter = 1; iter<=10; iter++) {
        if(iter=== number) {
            continue;
        }

        console.log(`Iteration ${iter}`);
    }

    console.log('Terminating module');
}

module.exports = continue_demonstrator;