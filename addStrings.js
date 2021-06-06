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

var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = '';
     
    for (;i >= 0 || j >= 0 || carry > 0;i--, j--) {
        const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
        const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
        const digitsSum = digit1 + digit2 + carry;
        sum = `${digitsSum % 10}${sum}`;
        carry = Math.floor(digitsSum / 10);
    }
    
    return sum;
};
