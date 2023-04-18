const even_number_generator = (number)=> {
    let iter = 1;
    let display_string = '';
    while(iter<=number) {
        if(iter%2 === 0) {
            display_string += iter + '/';
        }
        iter++;
    }
    console.log(`Even numbers upto ${number} : ${display_string}`);
}

module.exports = even_number_generator;