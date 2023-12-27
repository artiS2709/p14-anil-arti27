/**
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    if(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)
          return true;
      else
          return false;
  }
  