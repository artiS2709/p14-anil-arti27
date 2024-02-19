/**
 * @param {number[]} arr
 * @return {number}
 */
function findNonDuplicateElement(arr) {
    // PLACEHOLDER_JAVASCRIPT_FIND_NON_DUPLICATE_ELEMENT_BODY
       n = arr.length-1;
       for(let i=0;i<=n;i++){
           for(let j=0;j<=n;j++){
               if (i != j && arr[i] == arr[j]){
                   break;
               }
               if (j == n){   //after checking complete array return non duplicate element
                   //console.log(arr[i]);
                   return arr[i];
               }
           }
       }
   }

//let arr =[5,2,3,2,5];
//findNonDuplicateElement(arr);
   
   
   
   
   