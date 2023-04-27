const find_common = (list1, list2)=> {
    let commons = [];
    list1.forEach((element)=> {
        if(list2.includes(element)) {
            commons.push(element);
        }
    })
    console.log(commons);
    console.log(commons.length === 0? 'Empty': 'Contained');
}

module.exports = find_common;