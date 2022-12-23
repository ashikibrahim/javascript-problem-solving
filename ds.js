// fibinocci sequence (normal way)
// fib 0,1,1,2,3,5,8....
let n1=0,n2=1,temp;

for(let i=0;i<5;i++){   //i=0,1
    console.log(n1) //0,1,1,2,3,5 // 0,1
    temp=n1+n2; //0+1=1,1,3,5,8  //0+1=1,
    n1=n2;   //n1=1,1,2,3,5 // 1,
    n2=temp  //n2=1,2,3,5,8 // 1,
}






// recursion method
// function fib(n){
//     if(n==1){
//         return [0,1]
//     }
//     let arr=fib(n-1)
//     arr.push(arr[arr.length-1]+arr[arr.length-2])
//     return arr;
// }
// console.log(fib(10))






// sum of fibinocci numbers o(n)
// function calculateSum(n){
//     let fib=[]
//     if(n==1){
//         return 0;
//     }
//     fib[0]=0
//     fib[1]=1

//     let sum=fib[0]+fib[1]

//     for(let i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//         sum+=fib[i]
//     }
//     return sum
// }
// console.log(calculateSum(5))






// sum of fibinoccci using recursion 
function calculateSum(n){
    let fib=[]
        if(n==1){
             return 0;
     }
     let arr=calculateSum(n-1)


}
