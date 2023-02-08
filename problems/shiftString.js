let str="bosch"

function shiftString(str,n){
    result=""
    for(let i=0;i<str.length;i++){
        result +=str[(i+n) % str.length]
        console.log(result); 
    }
    return result
}

console.log(shiftString(str,2));