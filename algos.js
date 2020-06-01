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
