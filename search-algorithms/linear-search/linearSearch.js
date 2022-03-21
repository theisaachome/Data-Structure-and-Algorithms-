
const linearSearch = (arr,val)=>{

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===val)return i;
    }
    return -1;
}

linearSearch([12,23,34,45,56,67,78,89,20],200);