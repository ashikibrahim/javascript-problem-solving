// normal function
// function myFunction(a,b){
//     console.log("hey guys")
//     return sum=a+b
// }
// console.log(myFunction(6,5))
//arrow function

// var aFunction= (a,b) =>{
//    return sum=a+b
// }

// console.log(aFunction(6,8))

// this keyword


// currying
// function sample(a){
//     return function(b){
//             return function(c){
//                 return a*b*c
//             }
//     }
// }
// console.log(sample(1)(2)(3));



// immediately invoked function
// (function(a){
//     console.log(a)
// }(10))



// callback
// function print(val){
//     console.log(val)
// }
// function sum(a,b,cb){
//     let sum=a+b;
//     cb(sum)
// }
// sum(10,20,print)



//promise

// const sample = new Promise((resolve,reject)=>{
// let x=0;
// if(x==0){
//     resolve("success")
// }else{
//     reject("error")
// }
// })

// sample.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



// this keyword implicit binding 
// example 1
// function alert(){
//     console.log(this.age+"years old");
// }

// const myObj={
//     age:22,
//     alert:alert,
// }
// myObj.alert()
// out put 22 years old

// example 2
// function alert(){
//     console.log(this.age+"years old");
// }

// const myObj={
//     age:22,
//     alert:alert,
//     nestedObj:{
//         age:26,
//         alert:alert
//     }
// }
// myObj.alert()
// myObj.nestedObj.alert()





// call>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const bbb={
//     a:222,
//     b:000,
// }
// const myObj={
//     a:1,
//     b:2,
//     c:function(a,b){
//         console.log(this,a,b);
//     }
// }
// let a=myObj.c
// a.call(myObj,10,20)
// a.call(bbb,33,44)


// apply>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const myObj={
//     a:1,
//     b:2,
//     c:function(a,b){
//         console.log(this,a,b);
//     }
// }
// let a=myObj.c
// a.apply(myObj,[10,20])

// bind>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const myObj={
//         a:1,
//         b:2,
//         c:function(a,b){
//             console.log(this,a,b);
//         }
//     }
//     myObj.c=myObj.c.bind(myObj)
//     let a=myObj.c
//     a(40,50)


// console.log(function sample(a){
//     return function(b){
//         return function(c){
//             return a*b*c
//         }
//     }
// }(3)(4)(5));