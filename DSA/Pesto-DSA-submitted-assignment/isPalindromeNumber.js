/**
 * @param {number} number
 * @return {boolean}
 */
function isPalindrome(number) {
  // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
  let reverse =0;
  num = number;
  while(number!==0){
    reverse = (reverse*10)+number%10;  // getting last digit 
    number = parseInt(number/10);      // getting remaining digits to reverse
  }
  if (reverse === num) {
        return true;
  }
  return false;
}