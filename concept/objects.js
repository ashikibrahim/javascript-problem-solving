// qustion find duplicates count.
// let arr=[{name:"hii",id:1},{name:"hello",id:2},{name:"hii",id:3}]
// console.log(arr.splice(1,1))
// console.log(arr);

// var a={"name":"ash"}

// question 1
// var x=10
// console.log(x);

// {
//     var x=7
//     console.log(x);
// }
// var x=11
// console.log(x);
// filter_------------------------------------------------------
let items=[
    {name:"honda",price:200},
    {name:"nano",price:2000},
    {name:"beta",price:20},
    {name:"gamma",price:100},
    {name:"alpha",price:500},
    {name:"apple",price:700},
    {name:"atom",price:50},
    {name:"ash",price:30},
    {name:"honda",price:550},
]
// let filtereditems= items.filter((item)=>{
//         return item.price>=100
// })
// console.log(filtereditems);

// filter chained with map
// let filtereditems= items.filter((item)=>{
//             return item.price>=100
//     }).map((it)=>{
//         return it.name
//     })
//     console.log(filtereditems);


// map-------------------------------------------------------
// let itemNames=items.map((item)=>{
//     return item.name
// })
// console.log(itemNames);

// reduce method returns 1 single value./

// const total=items.reduce((currenttotal,item)=>{
//     return currenttotal+item.price
// },0)
// console.log(total);

// find-----------(return the first item which passes condition)--------------------------------------------
// let foundItem=items.find((item)=>{
//     return item.name==="honda"
// })
// console.log(foundItem);

// foreach => print all names here not return any array---------------------------------------
// items.forEach((item)=>{
//     console.log(item.name);
// })

// some()=>............returns true or false boolean valuye if any one is true.
// let somefunc= items.some((item)=>{
//     return item.price<0
// })
// console.log(somefunc);

// Every .............if all value in array is true.
// let everyfunc= items.every((item)=>{
//     return item.price>0
// })
// console.log(everyfunc);

// includes
// let arr=[1,2,3,4,5]
// let data=arr.includes(2)
// console.log(data);



