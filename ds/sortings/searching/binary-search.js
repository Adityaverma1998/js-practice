const arr = [10, 80, 40, 30, 90, 20];
const k = 40;

console.log('Kth element found at index:', binarySearch(arr, k));

function binarySearch(arr, k) {
    
    const sortedArray = arr.sort((a,b)=> a-b);

      if(arr===undefined || arr.length===0 || k === undefined){
        return -1;
      }
    let left = 0;
    let right = arr.length-1;
       while(left<=right){
        let mid = Math.floor((left+right)/2);

        if(sortedArray[mid]=== k){
            return mid;

        } else if(sortedArray[mid]<k){
            left = mid+1;
        }else if(sortedArray[mid]>k){
            right= mid -1;
        }


        

       }
       return -1;
     


    }
