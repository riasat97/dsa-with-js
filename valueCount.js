let arr= [12,14,36,36,36,36,36,90,100];
let target= 0;

function binarySearch(arr,target){
    let left=0;
    let right= arr.length-1;
    let mid;
    while(left<=right){
        mid= Math.floor((left+right)/2);
        if(arr[mid]===target)
        return mid;
        else if( arr[mid]< target)
        left= mid+1;
        else 
        right= mid-1;
    }
    return -1;
}
function countArrayLeft(left,arr,target){
    let count=0;
    while(arr[left]==target){
        count++;
        left--;
    }
    return count;
}
function countArrayRight(right,arr,target){
    let count=0;
    while(arr[right]==target){
       count++;
       right++;
    }
    return count;
}
function valueCount(arr,target){
    count=0;
    let mid=binarySearch(arr,target);
    if(mid>=0){
        let left=mid-1;
        let right=mid+1;
        count++;
        let leftCount=countArrayLeft(left,arr,target);
        let rightCount=countArrayRight(right,arr,target);
        return count+leftCount+rightCount;
    }
    else{
        return count;
    }
}

console.log("NO. of "+target+" occurs: "+valueCount(arr,target));