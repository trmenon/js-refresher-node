const get_pairs = (value, list)=> {
    let pairs = [];
    let exclude = [];
    list.forEach((element, index)=> {
        if(exclude.includes(index) === false){
            const pair_index = list.findIndex((item)=> item === value-element);
            if(exclude.includes(pair_index) === false && index !== pair_index) {
                const paired = list[pair_index];
                if(paired) {
                    pairs.push([element, paired]);
                    exclude.push(index);
                    exclude.push(pair_index);
                }
         }
        }
    })
    console.log(pairs);
}

module.exports = get_pairs;