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


// 4)...find duplicates in given array>>>>>>>>>>>>>>>>>>>>
