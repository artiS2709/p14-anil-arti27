function findIntersection(arr1, arr2) {
//TODO: Implement the function findIntersection
    const setFirst = new Set(arr1);
         const setSecond = new Set(arr2);
         let intersection = [];
         for (let i of setSecond) {
            if (setFirst.has(i)) {
               intersection.push(i);
            }
         }
         //return intersection; 
         console.log(intersection);
}

    const arr1 = [1,2,3,4,5];
    const arr2 = [4,5,6,7,8];

    findIntersection(arr1,arr2);