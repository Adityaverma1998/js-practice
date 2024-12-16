const arr = [10, 80, 40, 30, 90, 20];
const k = 30;

console.log('Kth element found at index:', linearSearch(arr, k));

function linearSearch(arr,k){
    if(arr.length===0 || arr === undefined || k === undefined){
        return -1;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]===k){
            return i;
        }
    }

    return -1
}