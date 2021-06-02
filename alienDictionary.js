// my solution

var isAlienSorted = function(words, order) {
    let i = 0;
    
    for (let j = 0;  j < words.length - 1; j++) {
        if (words[j] === words[j+1]) continue;
        let wIdx1 = order.indexOf(words[j][i]) !== undefined ? order.indexOf(words[j][i]) : -1;
        let wIdx2 = order.indexOf(words[j+1][i]) !== undefined ? order.indexOf(words[j+1][i]) : -1;
        if (wIdx1 > wIdx2) {
            return false
        } else if (wIdx1 === wIdx2 ) {
            i++;
            j--;
        }
    }
    return true;
};