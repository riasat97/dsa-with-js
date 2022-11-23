let arr= [12,14,24,26,36,42,56,90,100];
let target= 24;

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return 'Data found at index: '+i;
        }
    }
    return 'Data not Found';
}
console.log(linearSearch(arr,target)); 