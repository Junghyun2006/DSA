// first solution 
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    
    let hash = {
        '{' : '}',
        '[' : ']',
        '(' : ')'}
    
    let left = ['{', '[', '('];
    let right = ['}', ']', ')'];
    
    let toggle;
    
    let leftHolder = [];
    
    
    for (let i = 0; i < s.length; i++) {
        
        toggle = left.includes(s[i]) ? 'left' : 'right'
                  
        if (toggle === 'left' ) {
            leftHolder.unshift(hash[s[i]]);
        } else {
            if (leftHolder.join('') !== s.slice(i, i+leftHolder.length) || leftHolder.length === 0) return false;
            i = i + leftHolder.length - 1 ;
            leftHolder = [];
        }
    }
    
    if (toggle === "right") return true;
    return false;
};

// second solution;

var isValid = function(s) {
    // if (s.length % 2 !== 0) return false;
    
    let hash = {
        '{' : '}',
        '[' : ']',
        '(' : ')'}
    
    let left = ['{', '[', '('];
    
    let leftHolder = [];
    
    
    for (let i = 0; i < s.length; i++) {
        if (left.includes(s[i])) {
            leftHolder.push(hash[s[i]]) }
        else {
            if (leftHolder.length === 0 || leftHolder[leftHolder.length - 1] !== s[i]) return false;
            leftHolder.pop();
            
        }
    }
    if (leftHolder.length === 0) return true;
    return false;
};


// solution 

var isValid = function(s) {   
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        if (map[c]) {
          stack.push(map[c])
        } else if (c !== stack.pop()) {
          return false;
        } 
    }
    
    return !stack.length;
};
