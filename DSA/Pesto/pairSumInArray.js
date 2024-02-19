function findSumPairs(arr, targetSum) {
    //TODO: Implement the function findSumPairs
    const newArr = [];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]+arr[j]==targetSum && i!=j){
                newArr.push(arr[i],arr[j]);
                
                
            }
        }
    }
    console.log(newArr.toString());
    }

    const arr = [2,4,6,8,10];
    const targetSum = 12;
    findSumPairs(arr,targetSum);
    
    