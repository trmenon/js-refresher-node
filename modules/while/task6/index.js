const number_palindrome_checker = (number)=> {
    let num_string = '';
    let temp_num = number;
    while(temp_num>0) {
        num_string += (temp_num%10);
        temp_num = Math.floor(temp_num/10);
    }

    console.log(`${number} is ${number === parseInt(num_string)? 'a ': 'not a'} Palindrome-number as reverse of ${number} is ${num_string}`);
}

module.exports = number_palindrome_checker;