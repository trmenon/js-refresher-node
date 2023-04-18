const {
    while_tasks,
    for_tasks
} = require('./modules');

const main = ()=> {
    for_tasks.prime_number_pattern_generator(1,100);
    for_tasks.get_armstrong_in_interval(1,100000);
}

main();