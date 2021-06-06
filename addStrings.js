// my solution
var addStrings = function(num1, num2) {
    let num1R = num1.split('')
    let num2R = num2.split('')
    
    let carry = 0;
    let solution = [];
    
    while (num1R.length !== 0 || num2R.length !== 0) {
        let d1 = num1R.length ? parseInt(num1R.pop()) : 0;
        let d2 =  num2R.length ? parseInt(num2R.pop()) : 0;
        let digitSum = d1 + d2
        
        if (digitSum + carry >= 10) {
            solution.unshift(`${(digitSum + carry) % 10 }`)
            carry = 1
        } else {
            solution.unshift(`${digitSum + carry}`)
            carry = 0;
        }   
    }
    let final = carry ? carry.toString() + solution.join('') : solution.join('')
    return final
};


//best solution


