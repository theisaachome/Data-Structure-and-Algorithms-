const binearySearch = (arr,elem)=>{
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2);

    while(arr[middle] !==elem){
        if(elem < arr[middle] ) end = middle - 1;
        
        else start = middle + 1;

        middle = Math.floor((start + end) / 2);
        
    }
    return arr[middle]===elem ? middle : -1;
    
}

console.log(binearySearch([2,3,4,5,6,8,9,12,23,45,67],5));