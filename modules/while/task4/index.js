const pattern_summer = (number)=> {
    let iter = 0;
    let sum = 0;
    let temp_str = '';
    while(iter<number) {
        temp_str = temp_str + number;
        sum += parseInt(temp_str);
        iter++;
    }
    console.log(`INPUT:${number}! OUTPUT:${sum}`);
}

module.exports = pattern_summer;