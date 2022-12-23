// prime
let arr = [1,2, 3, 4,6, 5, 7, 9, 11, 13, 15];
let arr1 = [];
let arr2 = [];
let flag=0
function prime(arr,arr1,arr2) {
for(i=0;i<arr.length;i++){
    flag=0;
    for(j=2;j<arr[i]/2;j++){
        if(arr[i]>2 && arr[i]%j==0){
            flag=1;
            break;
        }
    }
    if(arr[i]>2 && flag==0){
        arr1.push(arr[i])
    }
}
console.log(arr1);
console.log(arr2);
}
console.log(prime(arr,arr1,arr2));
