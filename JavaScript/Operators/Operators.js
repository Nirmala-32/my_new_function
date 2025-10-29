// // // function add(){
// // //     if(true){
// // //         let x=10;       //when we use let in the block scope,it will not be accessible outside the block sope
// // //         console.log(x)
// // //     }
// // //     console.log(x)
// // // }
// // // add()
// // //preincrement post increment
// // var a=10
// // var b=20
// // //console.log(a+b)
// // // console.log(a++)
// // // console.log(b++)
// // // console.log(++a)
// // // console.log(++)
// // // console.log(++a + b++)
// // // console.log(a)
// // // console.log(b)
// // // console.log(a++ + ++b)
// // // console.log(a)
// // // console.log(b)
// // //pre,post decrement 
// // console.log(a--)
// // //console.log(--a)
// // console.log(a-- + --b)
// // console.log(--a + b--)
// // //relational(equality operators)

// // var a=10
// // var b='10'
// // console.log(a==b)  //==>here it will only check values
// // console.log(a===b) //here it will check va;lues and data types
// // var c=20
// // console.log(a==c)
// // console.log(a!== c) //srict inequality
// // console.log(a!=b) //loose inequality
// //comparison of objects
// var obj1={ A:20}

// var obj2={A:20}
// console.log(obj1==obj2) //false we will compare address  loose equality 
// console.log(obj1===obj2) //false strict equality
// console.log(obj1!==obj2) //true
// console.log(obj1!=obj2) //true

// //Ternary operator  ? :
// //condition ? true case : false case
// console.log(true?console.log("truecase"):console.log("falsecase"))
// console.log(2>3?console.log("truecase"):console.log("falsecase"))
// var a=10
// var b=20
// console.log(a==b?console.log("true case"):console.log("false case"))

// //logical operators

//&& || !
//&&-if both the cases true only it will return true
//||-if any one of the cases true it will return true  

var a=10
var b=10
console.log(a===b && a==b)
console.log(a!=b || a==b)




