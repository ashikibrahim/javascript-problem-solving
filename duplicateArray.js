//count the total number of duplicate elements in an array.

// let arr=[1,12,2,2,4,4,5,6,7,8,8]
//  let count=0;
// for( i=0;i<arr.length;i++){
//     for( j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j])
//             {
//                 count++;
//                 break;
//             }
//     }
    
// }
// console.log(count,"count");
// typeof(null);


// duplicate elements in array
// let arr=[1,1,2,2,3,4,5,6,6,7]

// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             for(k=i;k<arr.length;k++){
//                 arr[k]=arr[k+1]
//             }
//             arr.length=arr.length-1
//         }
//     }

// }
// console.log(arr);

// o print all prime numbers in an array.
let arr=[1,2,7,5,4,6,10,1,11]

for(i=0;i<arr.length;i++){
    let flag=0;
    for(j=2;j<=i/2;j++){
        if(arr[i]%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(arr[i])
    }
  
}
