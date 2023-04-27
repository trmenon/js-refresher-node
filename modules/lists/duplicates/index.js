const print_duplicates = (list)=> {
    let duplicates = [];
    list.forEach((element)=> {
        if(list.filter((item)=> item === element).length > 1) {
            if(duplicates.includes(element) === false) {
                duplicates.push(element);
            }
        }
    })
    console.log(duplicates);
}

module.exports = print_duplicates;