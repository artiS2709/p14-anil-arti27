//Get the sum of the maximum and minimum values in an array
/**
 * @param {number[]} arr
 * @return {number}
 */
function findSumOfMaxAndMin(arr) {
  // PLACEHOLDER_JAVASCRIPT_FIND_SUM_OF_MAX_AND_MIN_BODY
  
  let min = getMin(arr, arr.length);
  let max = getMax(arr, arr.length);
  return min + max;
}



    // Function to find minimum element
function getMin(arr,n)
{
    let res = arr[0];
    for (let i = 1; i < n; i++)
        res = Math.min(res, arr[i]);
    return res;
}
 
// Function to find maximum element
function getMax(arr,n)
{
    let res = arr[0];
    for (let i = 1; i < n; i++)
        res = Math.max(res, arr[i]);
    return res;
}
