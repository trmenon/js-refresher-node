const isArmstrong = (number)=> {
    let factor = number.toString().length;
    let temp = number;
    let sum=0;
    while(temp>0) {
        sum += Math.pow(temp%10, factor);
        temp = Math.floor(temp/10);
    }
    if(number === sum) {
        return true;
    }else {
        return false;
    }
}

module.exports = isArmstrong;