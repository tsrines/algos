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