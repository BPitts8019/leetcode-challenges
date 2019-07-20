/*
=== Palindrome Number ===
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
   const fwdNum = x.toString();
   let revNum = "";
   
   for (let idx = fwdNum.length-1; idx >= 0; idx--) {
      revNum += fwdNum.charAt(idx);
   }

   return fwdNum === revNum;
};


console.log(`====== Test 01 ======`);
console.log(`Input: 121\nExpected Output: true`);
console.log(`=====================`);
console.log(isPalindrome(121));
console.log("");

console.log(`====== Test 02 ======`);
console.log(`Input: -121\nExpected Output: false`);
console.log(`=====================`);
console.log(isPalindrome(-121));
console.log("");

console.log(`====== Test 03 ======`);
console.log(`Input: 10\nExpected Output: false`);
console.log(`=====================`);
console.log(isPalindrome(10));
console.log("");

console.log(`====== Test 04 ======`);
console.log(`Input: 1234567\nExpected Output: false`);
console.log(`=====================`);
console.log(isPalindrome(1234567));
console.log("");

console.log(`====== Test 05 ======`);
console.log(`Input: 1233321\nExpected Output: true`);
console.log(`=====================`);
console.log(isPalindrome(1233321));
console.log("");