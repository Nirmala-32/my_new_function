
// //import add from './module1.js'
// import hello from './module1.js'

// import {a as variable,login as A} from './module2.js'
// //console.log(add)
// console.log(hello)
// //console.log(login1)
// //console.log(a)
// console.log(A)
// console.log(variable)

// console.log("this ia a js" )

// function signUp(){
//     console.log('signup')
// }
// function login(){
//     console.log('logged into your account')
// }
// //destructuring
// var arr=[1,2,3]//we can unpack by using destruture
// console.log(arr)
// var[a,b,c]=arr //destruture 
// console.log(a,b,c)
// //by using destructure we can perform not only in array we perform on objects also
// function add(a,b){
//     return a+b
// }
// console.log(add(1,2))//here we are passing individually
// //now i will take these arguments and pass  it into array and assign to one variable
var a=[1,2]
console.log(a)
//console.log(add(a))
// //to unpack this,unpack this in function [] lo elaga rastha
 function add([a,b]){
     return a+b
 }
 //var a=[1,2]
 //console.log(a)
 console.log(add(a))


