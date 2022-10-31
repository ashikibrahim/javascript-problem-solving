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

// console.log(countOfDuplicate
// -------------------------------------------------

// 6).>>>>>>>>>>>>>>>find the no is intiger
// const validate = "ashik";
//  console.log(!isNaN(validate))
//-----------------------------------------------------

// 7)sort an array>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const unsorted=[10,4,7,2,22,13];

// unsorted.sort((a,b)=>{
//     return a-b
// })
// console.log(unsorted);

