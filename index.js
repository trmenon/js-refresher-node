const {
    while_tasks,
    for_tasks,
    list_tasks
} = require('./modules');

const main = ()=> {
    // list_tasks.print_duplicates([10,20,30,20,30,40,50,60,10]);
    // list_tasks.get_pairs(6, [2,3,4,5]);
    list_tasks.binary_search(25, [10,11,12,20,30,45,76,34,25]);
    // const arr = [4,5,6];
    // let count = arr.length*2+1;
    // const newArray = arr.map((element, index)=> {
    //     let iter = count;
    //     count -=2;
    //     return element + iter;
    // })
    // console.log(newArray);
}

main();