// 1. Compare the following examples, build logic and solve in any programming language(use offline or online IDE).
 
// 	e.g. 1) input :  ABDEF
// 					output : GFECB
// 	e.g. 2) input :  XTD
// 					output : EUY



let str1="abdef"
function reverseString(str1){
    let str="";
    for(i=str1.length-1;i>=0;i--){
        str+=str1[i]
    }
    return str
}

console.log(reverseString(str1));

// const str = 'ashik'

// function reverseStr(str){
//    let output='';
// //   console.log(str.length-1,"jj");
//   for(i=str.length-1;i>=0; i--){
//       output=output+str[i]
//     //   console.log(i,str[i],"lll")
//   }
//   return output
// }

// console.log(reverseStr(str))


// With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

// 	e.g. 1)
// 	    input : 1
// 	    output : 
// 	                     1
// 	                  1, 2, 1
// 	                     1
	                     
// 	e.g. 2)     
// 	    input : 2
// 	    output : 
// 	                     1
// 	                  2, 4, 2
// 	                     1
// e.g. 3)
// 	    input : 3
// 	    output :     
// 	                      1
// 	                   1, 2, 1
// 	                1, 2, 3, 2, 1
// 	             1, 2, 3, 4, 3, 2, 1
// 	                1, 2, 3, 2, 1
// 	                   1, 2, 1
// 	                      1
	
// 	e.g. 4)
// 	    input : 4
// 	    output :     
// 	                      1
// 	                   1, 2, 1
// 	                1, 2, 3, 2, 1
// 	             2, 4, 6, 8, 6, 4, 2
// 	                1, 2, 3, 2, 1
// 	                   1, 2, 1
//                        1


