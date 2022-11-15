// IIFL- need 2 paranthesis to avoid error otherwise a named function is required
// (function(){
// console.log("hiiii");
// })();
 

// ---------higher order function.
// function higherOrder2() {
//     return function() {
//       return "Do something";
//     }
//   }      
//   var x = higherOrder2();
//   x() 

//3) call..................
// function sayHello(){
//     console.log("hello"+ this.name)
// }

// var obj ={name:"sandy"};
// sayHello.call(obj)

// 4)Apply

// Instruction -
// - please attempt all questions 
// - You will have Max 20 mins to complete these below questions
// - You are not supposed to take help of anyone or google or internet. 
// - After 20 mins, you need to open Chrome Browser and open Console and test one by one.

// 1. Write a function for this - multiply(x)(y)(z) which outputs x*y*z ? (Hint- Currying a function)
// write solution below this:


// ------------------------------------------

// 2. var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);   
//         console.log("outer func:  self.foo = " + self.foo);  
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);   
//             console.log("inner func:  self.foo = " + self.foo);    
//         }());
//     }
// };
// myObject.func();
// output of this function?


// ------------------------------------------
// 3. var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
    
//     })(456);
// })(123);

// output of this function?

// ------------------------------------------
// 4. (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1;
//         let y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();
// output of this function?
// throw new 

// ------------------------------------------
// 5- Example of array.find()
// write solution below this:

// ------------------------------------------
// 6- Example of MAP()
// write solution below this:


// ------------------------------------------
// 7 - Example of filter()
// write solution below this:
// filter 

// ----------

// 8. Write a function that returns the following
// addSix(10); // returns 16
// addSix(21); // returns 27
// write a solution below this - 

