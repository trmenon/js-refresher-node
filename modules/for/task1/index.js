const number_desc_pattern_generator = (number)=> {
    let disp_str = '';
    for(let iter = number; iter>0; iter --) {
        disp_str += iter + '/';
    }
    console.log(`Pattern : ${disp_str}`);
}

module.exports = number_desc_pattern_generator;