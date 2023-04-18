const find_exp_in_range = (
    lower_limit,
    upper_limit,
    exp_factor
)=> {
    let iter=1;
    let disp_str = '';
    let temp = 0;
    while(iter<=upper_limit) {
        temp = Math.pow(iter, exp_factor);
        if(temp>=lower_limit && temp<=upper_limit) {
            disp_str += iter+ '/';
        }
        iter++;
    }
    console.log(disp_str);
}

module.exports = find_exp_in_range;