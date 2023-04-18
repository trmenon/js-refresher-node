const number_iterator = (number, ascending)=> {
    let iter = 1;
    let display_str = '';
    if(ascending === true) {
        while(iter<=number) {
            display_str += iter++ + '/';
        }        
    }
    if(ascending === false) {
        iter = number;
        while(iter>0) {
            display_str += iter-- + '/';
        }
    }
    console.log(`${ascending === true? 'Ascending ': 'Descending '} Pattern: ${display_str}`);
}

module.exports = number_iterator;