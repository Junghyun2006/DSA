// my solution .. brute force

var maxSubArray = function(nums) {
    let largestSum = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largestSum) largestSum = nums[i];
        let counter = nums[i] 
        
        for (let j = i+1; j < nums.length; j++) {
            counter += nums[j];
            if (counter >= largestSum) {
                largestSum = counter;
            } 
        }
    }
    
    return largestSum
};

