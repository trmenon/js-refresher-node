const series_summer = (number) => {
    let iter = 0;
    let sum = 0;
    if(number<0) {
        console.log('Enter only positive numbers');
    }else {
        while(iter<=number) {
            sum += iter++;
        }
        console.log(`Sum of terms upto ${number} = ${sum}`);
    }
}

module.exports = series_summer;