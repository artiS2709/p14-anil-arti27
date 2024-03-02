function findIntersection(arr1, arr2) {
    //TODO: Implement the function findIntersection
        let newArr = [];
        let newArr_unique = [];
        for(let i = 0;i<arr2.length;i++){
            for(let j = 0;j<arr1.length;j++){
                if(arr2[i]==arr1[j]){
                     newArr.push(arr2[i]);
                     newArr_unique = Array.from(new Set(newArr)); //set contains unique value of array
                }
            }
        }
        return newArr_unique;
        //console.log(newArr_unique);
        }

    const arr1 = [1,2,3,4,5];
    const arr2 = [4,5,6,7,8];

    findIntersection(arr1,arr2);




    /*********************** using SET *************/
    function doIntersection(arr1, arr2) {
        const setFirst = new Set(arr1);
        const setSecond = new Set(arr2);
        let intersection = [];
        for (let i of setSecond) {
           if (setFirst.has(i)) {
              intersection.push(i);
           }
        }
        return intersection;
        //console.log(intersection);
     }
     doIntersection(arr1,arr2);
    