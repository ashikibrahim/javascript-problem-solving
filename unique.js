



// PUSH THE UNIQUE ELEMENTS FROM 1ST AND 2ND ARRAY TO  NEW ARRAY>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function unique(arr1,arr2,uniqueArr) {
//     for(var i=0; i<arr1.length; i++) {
//         flag = 0;
//         for(var j=0; j<arr2.length; j++) {
//             if(arr1[i] === arr2[j]) {
//                 arr2.splice(j,1);
//                 j--;
//                 flag = 1;
//             }
//         }
  
//         if(flag == 0) {
//             uniqueArr.push(arr1[i]);
//         }
//     }
//     uniqueArr.push(arr2);
//     return uniqueArr;
// }
// var arr1 = [54, 71, 58, 95, 20];
// var arr2 = [71, 51, 54, 33, 80];   
// var uniqueArr = [];
  
// console.log("Unique elements in the two arrays are:");
// console.log(unique(arr1,arr2,uniqueArr).flat());
  
// PUSH THE DUPLICATE ELEMENTS FROM 1ST AND 2ND ARRAY TO  NEW ARRAY>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // function duplicate(arr1,arr2,duplicateArr){
    //     for(var i=0;i<arr1.length;i++){
    //         for(var j=0;j<arr2.length;j++){
    //             if(arr1[i]===arr2[j]){
    //                 duplicateArr.push(arr2[j])
    //             }
              
    //         }
      
    //     }
    //     return duplicateArr;
       
    // }
    // var arr1 = [54, 71, 58, 95, 20];
    // var arr2 = [71, 51, 54, 33, 80];   
    // var duplicateArr = [];
    // console.log(duplicate(arr1,arr2,duplicateArr))

// console.log(unique(a,b,c));
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4 
// // 1 2 3 4 5

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log(j);
//     }
// }

