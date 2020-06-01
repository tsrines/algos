class Solution {
  solve(s, k) {
    s = s.split("x")
    if (s[0].length >= k || s[s.length - 1].length >= k) return true
    for (let i = 1; i < s.length; i++) {
      if (s[i].length >= 2 * k - 1) return true
    }
    return false
  }
}

class Solution {
  solve(nums, k) {
      
      // nums.sort((a,b)=> a-b)
      let total = 0 
      // if(nums.length === 1) return 0
      // if(k===0) return -1
      
      for(let i = 1; i < nums.length; i++){
          nums[i]+=nums[i-1]
          
      }
      for(let i = nums.length-1; i >=0; i--){
          if(nums[i]<=k) return i
      }
      return -1
  }
}
