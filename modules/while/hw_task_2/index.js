const check_armstrong = (number)=> {
    let temp = number;
    let sum = 0;
    while(temp>0) {
        sum += Math.pow(temp%10, 3);
        temp = Math.floor(temp/10);
    }

    if(sum === number) {
        console.log(`${number} is an Armstrong-Number as the sum of terms of ${number} is equal to ${sum}`);
    }else {
        console.log(`${number} is a not an Armstrong-Number as the sum of terms of ${number} is equal to ${sum}`);
    }
}

module.exports = check_armstrong;