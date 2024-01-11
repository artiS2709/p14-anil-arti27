/**
 * @param {number} number
 * @return {number}
 */
function reverse(number) {
  // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
  let reverse =0;
  while(number!==0){
    reverse = (reverse*10)+number%10;
    number = parseInt(number/10);
  }
  return reverse;
}
