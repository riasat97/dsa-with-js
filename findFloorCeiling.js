let arr= [12,14,24,26,36,42,56,90,100];
let target= 30;

function binarySearch(arr,target){
    let left=0;
    let right= arr.length-1;
    let mid,flag=0;
    while(left<=right){
        mid= Math.floor((left+right)/2);
        if(arr[mid]===target){
            flag=1;
        break;    
        }
        else if( arr[mid]< target)
        left= mid+1;
        else 
        right= mid-1;
    }
    if(flag){
        return {'floor':arr[mid-1],'ceil':arr[mid+1]};
    }
    
    else{
        let partision;
        let left=0, right= arr.length-1, mid;
        mid= Math.floor((left+right)/2);
        if( arr[mid]< target){
            partision='right';
        }
        else{
            partision='left';
        }
        console.log(partision); 

        while(left<=right){
            mid= Math.floor((left+right)/2);
            if( arr[mid]< target)
                left= mid+1;
            else
                right= mid-1;
        }
        if(partision=="right")
        return {'floor':arr[mid-1],'ceil':arr[mid]};
        else return {'floor':arr[mid],'ceil':arr[mid+1]};
    }
}
data=binarySearch(arr,target);
console.log('floor: '+data.floor+' ceil: '+data.ceil);