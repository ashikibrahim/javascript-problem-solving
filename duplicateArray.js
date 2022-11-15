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

let arr=[1,1,2,2,3,4,5,6,6,7]

for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            for(k=i;k<arr.length;k++){
                arr[k]=arr[k+1]
            }
            arr.length=arr.length-1
        }
    }

}
console.log(arr);