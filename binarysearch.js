let arr= [12,14,24,26,36,42,56,90,100];
let target= 24;

function binarySearch(arr,target){
    let left=0;
    let right= arr.length-1;
    let mid;
    while(left<=right){
        mid= Math.floor((left+right)/2);
        if(arr[mid]===target)
        return 'Data found at index: '+mid;
        else if( arr[mid]< target)
        left= mid+1;
        else 
        right= mid-1;
    }
    return "Data not found";
}
console.log(binarySearch(arr,target));