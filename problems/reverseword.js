let word="india is my country" 

function reverse(word){
    let result=""
    let string=""

    for(let i=0;i<=word.length;i++){
            if(word[i]!==" " && i!==word.length){
                string+=word[i]
            }else{
                result+=reverseString(string)+" "
                string=" " 
            }
    }
    return result;
}
console.log(reverse(word));

function reverseString(string){
    let rev=" "
    for(let i=string.length-1;i>=0;i--){
        rev+=string[i]
    }
    return rev
}
