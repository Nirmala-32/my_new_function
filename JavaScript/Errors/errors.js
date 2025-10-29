//syntax error
console.log("hai")
//console.log("hai)
//Reference error
//without defining vsriable if we access varaiable we get reference error
//console.log(a) 
//var a="hello"
//var r=a.toUpperCase()
//console.log(r)
//var m=2
//var k=m.toUppercase()
//var a="hello"
//a.toUpperCase()
//console.log(a)
//Range error
// var arr=[1,2,3,4]
// var arr1=new Array(-1)
// console.log(arr1)
//handling errors
//console.log(a)
// try{
// console.log(a)
// }
// catch(error){
//     console.log(error)

// }
// finally{
//     console.log("this is a final  block")
// }
//console.log("this is a last line of the program")
//we can customize our errors by using throws keyword
// try{
//     throw new error ("this is a error that had raised by the user")
// }
// catch(error){
//     console.log(error)
// }
//var age=20
// var age=17
// try{
//     if(age<18){
//         throw new error("you are not allowed to vote")
//     }
// }
// catch(error){
//     console.log(error)
// }
//Option chaining
// var obj={
//     name:"nirmala",
//     job:{company:'NYB',city:'hyd'}
// }
// console.log(obj)
// console.log(obj.job)
// console.log(obj.job.company)
// //console.log(obj.job.role)
// console.log(obj.job?.role)
// console.log(obj["role"])
//NodeJs
//JSON(javascript object notation)
var obj1={
    name:"ravi",
    role:"developer",
    city:"hyd"
}
console.log(obj1)
//checking type
console.log(typeof(obj1))
//Strigfy convert normal object into string format(json.obj) we use stringfy
var jsonobj=JSON.stringify(obj1)
console.log(jsonobj)
console.log(typeof(jsonobj))
//convert stringformat into normal obj we use JSON.parse
var normalobj=JSON.parse(jsonobj)
console.log(normalobj)
console.log(typeof(normalobj))
//Factory function
var name="Reshwanth"
var obj2={
    name
} 
console.log(obj2)
console.log(typeof(obj2))