//<<<1>>> find frequency
// let arr=[10,20,30,40,20,10]
// let obj={}

// for (let i=0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//         obj[arr[i]]=1
//     }else{
//         obj[arr[i]]+=1
//     }
// }
// console.log(obj);
// ----------------------------------------------------------------------


// 2>>>>> object and class
//class
// class Car {
//     constructor(model,name){
//         this.model = model;
//         this.name = name;
//     }
//     start(){
//         console.log(`name of the car: ${this.name}`);
//     }
// }
// // object
// bmw = new Car("innova");
// bmw.start();
// -------------------------------------------

// 3)>>>>>implement class inheritence in js>>>>>>>>>>>>>>>>>>
// class Car {
//     constructor(model,name){
//         this.model=model;
//         this.name=name;
//     }
//     start(){
//         console.log(this.name)
//     }
//     end(){
//         console.log("car stopped");
//     }
// }

// class ElectricCar extends Car{
//     dashboard(){
//         console.log("child method");
//     }
//     start(){
//         super.start();
//         super.end();
//         this.dashboard();
        
//     }
// }

// evCar = new ElectricCar('Tesla','A320');

// evCar.start();
// evCar.end();
// evCar.dashboard();
// ----------------------------------------------------------------------------------

// 4)...find duplicates in given array>>>>>>>>>>>>>>>>>>>>
//  const duplicatedArray =[14,23,5,5,7,7,98,14,55]

//  const duplicates = duplicatedArray.filter((ele,index,arr)=>arr.indexOf(ele)!== index)
//  console.log(duplicates);
// ---------------------------------------------------------------------------------

// 5)count of duplicates in array
// const months = ["may","april","june","may","feb","april","feb","july"]

// const countOfDuplicates = months.reduce((obj,month)=>{
//     if(obj[month]==undefined){
//         obj[month]=1;
//         return obj;
//     }else{
//         obj[month]++;
//         return obj;
//     }
// },{})

// console.log(countOfDuplicate)
// -------------------------------------------------

// 6).>>>>>>>>>>>>>>>find the no is intiger
// const validate = "ashik";
//  console.log(!isNaN(validate))
//-----------------------------------------------------

// 7)sort an array number>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const unsorted=[10,4,7,2,22,13];

// unsorted.sort((a,b)=>{
//     return a-b
// })
// console.log(unsorted);
// -------------------------------------------------------------------------------------

// 8)unique values in array>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const number=[10,1,1,5,5,7,8,9]
// const uniqueValues=number.filter((ele,index,arr)=>arr.indexOf(ele) == index)
// console.log(uniqueValues);
// const sortedUniqueValues=uniqueValues.sort((a,b)=>{
//     return a-b;
// })
// console.log(sortedUniqueValues);
// -------------------------------------------------------------------------------------

// 9) find max value in an array >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const numberArr =[5,7,10,3,77,94,27,65]

// function findMaxValue(arr){
//     return arr.reduce((prev,curr)=>{
//         return prev>curr ? prev : curr; 
//     })
// }

// console.log(findMaxValue(numberArr));

// 10)avg of the numbers in the numbered array
// const num=[5,10,40,25,90,45]

// const totalCount = num.reduce((a,b)=>a+b);
// console.log(totalCount);
// const arrLength=num.length
// console.log(arrLength);
// console.log(totalCount/arrLength);
// -------------------------------------------------------------------

// 11)uppercase first char at string array>>>>>>>>>>>>>>>>>>>>
// const days =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
 
// let updatedDays=[];
// for(let day of days){
//     day=day.charAt(0).toUpperCase()+day.substring(1);
//     console.log(day)
//     updatedDays.push(day);
// }
// console.log(updatedDays);

// 12)make sentence out of given array
// const stringArray=["keep","the","blue","flag","fly","high"]

// const finalOutput=stringArray.join(" ")
// console.log(finalOutput);

// 13)check if given array contains any element of another array    
// const array1=[1,2,3,4,5]
// const array2=[10,9,7]

// let result =array1.some(ele=>array2.includes(ele));
// console.log(result);

// 14)check if string is anagram
// const string1="cinema";
// const string2="iceman";

// function checkAnagram(string1,string2){
//     var a=string1.toLowerCase();
//     var b=string2.toLowerCase();

//     a=a.split("").sort().join("");
//     b=b.split("").sort().join("")
//     console.log(a)
//     console.log(b);
//     return a === b;
// }
// console.log(checkAnagram(string1,string2));

// 15) map method
// const input={
//     "students":[
//         {
//             name:"ashik",
//             id:10,
//         },
//         {
//             name:"akshay",
//             id:12,
//         },
//         {
//             name:"deepu",
//             id:14,
//         },
//     ]
// }
// const op=input.students.map(function(item){
//     return item.name
// })
