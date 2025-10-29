//  //function
//  //it is a block of code to do some task and return some values
//  console.log("functions")
// //  var a=10
// //  function hello(){
// //     var a=30
// //     var b=20
// //     var c=46
// //     console.log(a)               //function declaration
// //        console.log(b)
// //        return "this is a function"
// //        console.log(c)

// //  }
// //  console.log(hello())
// //  var k=hello()
// // console.log(k)
// // hello()
// // hello()
// //  //function expresssion
// //  //i)named function expresssion
//  //we are storing function declaration syntax in varaiable
//  var r= function hello(){
//     var a=30
//     var b=20
//     var c=46
//     console.log(a)               //function declaration
//        console.log(b)
//        return "this is a function"
//        console.log(c)

//  }
//  console.log(r()) //we can call function by using variable name
//  //var k=hello()
// //console.log(k)
// //2.)annonmus function expresssion
// //in function declaration syntax remove function name then store it in one variable
//  var p=function(){
//     var a=30
//     var b=20
//     var c=46
//     console.log(a)               //function declaration
//        console.log(b)
//        return "this is a function"
//        console.log(c)

//  }
//  //console.log(hello())
//  p()  //in this o/p we didint get "this is a function" because we are not used console.log
//       //to print the return statemnet to variable.
//3.)arrow function
//in this we remove function keyword name and functionname() and give it to a variable.
 var s=()=>{
    var a=30
    var b=20
    var c=46
    console.log(a)               //function declaration
       console.log(b)
       return "this is a function"
       console.log(c)

 }
 //console.log(hello())
 //var k=hello()
//console.log(k)
console.log(s())//here we print s only it give total function without execution of code
