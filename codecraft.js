let arr4 = [{id:1,status:'pending'},{id:2,status:'pending'},{id:3,status:'complete'},{id:4,status:'pending'}]
let count1=0
let count2=0
// let obj={}
for(i=0;i<arr4.length;i++){

    
   if(arr4[i].status=="pending"){
    count1+=1;
   }else{
     count2+=1
   }
   
}
console.log("count of pending : "+count1);
console.log("count of complete : "+count2);
