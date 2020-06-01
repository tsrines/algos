You are given a string s and an integer k. Each character in the string is either '.' or 'x', where '.' represents an empty space and 'x' represents a person.

Return whether it's possible to choose a position to stand on such that the distance between you and the closest person to you is at least k. (The distance between each neighbouring indices is 1).

Example 1
Input

s = "x.."
k = 2
Output

true
Explanation

You can stand at s[2]

Example 2
Input

s = "x..x"
k = 2
Output

false
Explanation

There's a person standing next to both of the empty spaces (distance of 1).

Example 3
Input

s = "x...x"
k = 2
Output

true
Explanation

You can stand at s[2].

Example 4
Input

s = "..x"
k = 2
Output

true
Explanation

You can stand at s[0]

Example 5
Input

s = "."
k = 1
Output

true
Explanation

You can stand at s[0]

K Prefix
Given a list of integers nums and an integer k, return the maximum possible i where nums[0] + nums[1] + ...  + nums[i] ≤ k. Return -1 if no valid i exists.

Constraints

Length of nums ≤ 1000
-1,000 ≤ nums[i] ≤ 1,000
k ≤ 10^9
Example 1
Input

nums = [3, -5, 4, 1, 6]
k = 4
Output

3
Explanation

The largest i here is 3, since we have nums[0] + ... + nums[3] = 3 and if we added the next number (6) the sum would no longer be less than k.