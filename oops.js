class Vehicle{
    constructor (name,company,engine){
        this.name=name
        this.company=company
        this.engine=engine
    }
    getDetails(){
        return (`name of the car is ${this.name}`)
    }
}
// making object with the help of the constructor

let car1 = new Vehicle('c-class','merc','1340cc')
let car2 = new Vehicle('7series','bmw','1000cc')

console.log(car1.name);
console.log(car2.company)
console.log(car2.getDetails());