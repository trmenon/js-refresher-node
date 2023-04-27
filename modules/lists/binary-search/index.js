const utilz = require('./utilz');

const binary_search = (item, array)=> {
    const list = array.sort((a,b)=> a-b);
    let lower_limit = 0;
    let upper_limit = list.length - 1;
    let mid = utilz.get_mid(lower_limit, upper_limit);
    let required_index = -1;
    let count = 0;
    console.log(list);
    while(lower_limit<= upper_limit) {
        count++;
        mid = utilz.get_mid(lower_limit, upper_limit);
        if(item === list[mid]) {
            required_index = mid;
            break;
        }
        if(item < list[mid]) {
            upper_limit = mid-1;
        }
        if(item > list[mid]) {
            lower_limit = mid+1;
        }
    }
    if(required_index === -1) {
        console.log(`${item} is not present in the array`);
    }else {
        console.log(`${item} found at position ${required_index+1}`);
    }
    console.log(`Iterated ${count} number of times`);
}

module.exports = binary_search;