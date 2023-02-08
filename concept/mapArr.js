// map method
// let arr=[4,5,6]
// let arr2=arr.map((value,index,array)=>value*2)
// console.log(arr2);

// let arr2=arr.map((value,index,array)=>{
//     return value;
// })
// console.log(arr2);

let arr=[1,2,3,4,5]
let[...c]=arr
// let num=[...arr]
console.log(c);
let obj ={name:"ashik",age:12}
let d={...obj}
d.name="ameen"
console.log(d.name);
console.log(obj.name);
// filter method

// const arr=[33,44,7,6,99]
// const arr2=arr.filter((value,index,array)=>{
//     // if(value>20){
//     //     return value
//     // }

//     return value>20
// })

// console.log(arr2);
// function canVote(age){
//     return age>=18
// }

// console.log(arr.filter(canVote));




// reduce
// let arr=[1,2,3,4,5]
// parameter = accumulator,current,index,array
// const arr2=arr.reduce((acc,cur)=>acc*cur) 
// console.log(arr2);


// arr=[1,2,3,4,5]
// const arr2=arr.reduce((acc,curr)=>{
//     return acc+=curr
// },10)
// console.log(arr2);