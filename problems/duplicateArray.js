//count the total number of duplicate elements in an array.

let arr=[1,12,2,8,2,4,4,5,6,7,8,8]
 let count=0;
for( i=0;i<arr.length;i++){
    for( j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j])
            {
                count++;
                break;
            }
    }
    
}
console.log(count,"count");
typeof(null);


// removw duplicate elements in array
// let arr=[77,77,45,99,99,63,7,1,2,2]

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
// let arr=[1,2,7,5,46,6,2,108,18,1,11]

// for(i=0;i<arr.length;i++){
//     let flag=0;
    
//     for(j=2;j<=arr[i]/2;j++){
//         if( arr[i]>2 &&  arr[i]%j==0){
//             flag=1;
//             arr[i]=0
//             break;
//         }
     
//     }
//     if(flag==0 && arr[i]>2){
//              arr[i]=1;
//             //    console.log(arr[i])
//     }if(arr[i]==2 ){
//         arr[i]=0;
//     }

//     console.log(arr[i])
// }

// merge two arrays and sort in descending order.
// merge 2 arrays
// let arr1=[1,3,6,9]
// let arr2=[5,10,20,15]
// with inbuilt function
// const child=arr1.concat(arr2)
// console.log(child);
//without inbuilt
// function merged(arr1,arr2){
//    let start=arr1.length
//    for(i=0;i<arr2.length;i++){
//        arr1[start++]=arr2[i]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//    }
//    let temp=0;
//    for(i=0;i<arr1.length;i++){
//     for(j=i+1;j<arr1.length;j++){
//         if(arr1[i]>arr1[j]){
//             temp=arr1[i];
//             arr1[i]=arr1[j]
//             arr1[j]=temp
//         }
//     }
//    }
//    return arr1
// }
// console.log(merged(arr1,arr2))
