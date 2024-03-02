function isMinHeap(arr){
//TODO: Implement the function isMinHeap
// Start from root and go till  
    let n = arr.length;
    // the last internal node 
    for (let i=0; i<=Math.floor((n-2)/2); i++) 
    { 
        // If left child is smaller,  
        // return false 
        if (arr[2*i +1] < arr[i]) 
                return false; 
  
        // If right child is smaller, 
        // return false 
        if (arr[2*i+2] < arr[i]) 
                return false; 
    } 
    return true;
}