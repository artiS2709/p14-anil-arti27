/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function calculateHCF(a, b) {
    // PLACEHOLDER_JAVASCRIPT_CALCULATE_HCF_BODY
  for (let temp = b; b !== 0;) { 
          b = a % b; 
          a = temp; 
          temp = b; 
      } 
      return a;
  }
  
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  function calculateLCM(a, b) {
    // PLACEHOLDER_JAVASCRIPT_CALCULATE_LCM_BODY
    const gcdValue = calculateHCF(a, b); 
      return (a * b) / gcdValue; 
  }
  