// Write a program to count the frequency of each element of an array.
// let arr=[1,1,2,2,5]
// //  console.log(arr.length,"arrlen")
// obj={}

// for(i=0;i<arr.length;i++){
//   if(!obj[arr[i]]){

//     obj[arr[i]]=1

//   }else{

//     obj[arr[i]]+=1

//   }
// }
// console.log(obj)
// --------------------------------------------------------------------------------------
//  Write a program to find the largest and smallest number in an array.
// let arr = [7, 3, 6, 4, 8,99,1];
// let max = arr[0];
// let min = arr[0];
// for(i = 0; i < arr.length; i++) {
//   if(arr[i] < min){
//         min=arr[i]
//   }if(arr[i]>max){
//     max=arr[i]
//   }
// }
// console.log("max value :",max)
// console.log("min value :",min)

// -------------------------------------------------------------------------------

// find the second largest value of an array
// let arr=[9,6,11,5,33,89]
// let max=0,smax=0;

// for(i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         smax=max;
//         max=arr[i];
//     }if(arr[i]>smax && arr[i]!=max){
//         smax=arr[i]
//     }
//     console.log("smax",smax,"max",max)
// }

// --------------------------------------------------------------------------------------------------------
// Write a program to separate odd and even numbers in separate arrays
// let arr=[5,9,4,6,8,3,2,1]
// let arr1=[]
// let arr2=[]
// function myFunction(arr){
//    for(i=0;i<arr.length;i++){
//      if(arr[i]%2==0){
//         arr1.push(arr[i])
//      }else{
//         arr2.push(arr[i])
//      }
//    }
//    console.log(arr1,"even");
//    console.log(arr2,"odd");
// }

// myFunction(arr)

// ----------------------------------------------------------------------

// Write a program to delete an element at a specific position from an array.
// let arr = [7, 3, 4, 8];
// inbuilt function
// arr.splice(1,2);
// console.log(arr,"pppp");
// let key = 8;
// let index = -1;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] == key) {
//     index = i;
//   }
//   if (index != -1) {
//     for (j = index; j < arr.length; j++) {
//         arr[j] = arr[j + 1];
//     }
//   }
// }
// console.log(arr);
// i=0;i<4
// 

// write a second min value in array
// let arr=[0,1,8,5,7,8]
// let min,smin;
// let max=0;

// for(i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//         min=max;
//         smin=max;
//     }
// }
// for(i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         smin=min
//         min=arr[i]
//     }
//     if(arr[i]>min && arr[i]<smin){
//         smin=arr[i]
//     }
// }
  
// console.log(smin,"smin");
