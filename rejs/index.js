// var person={
//     name:"Reshwanth",
//     age:2.5,
//     city:"Atp"
// }

// for(var x in person){
//    // console.log(x)  //here we get keys
//    // console.log(person.x)
//     //console.log(person.name)
//    //console.log(person.name)
//    //console.log(person.age)
//    //console.log(person.city)
//    //console.log(person[x]) //here we get values
// }
// //console.log(person["name"])
// //console.log(person.age)
// //console.log(person[x])
// //console.log(x)
// //for of loop
// var details=["nirmala",30,"hyd"]
// //console.log(person)
// // for(var x of person){
// //     console.log(x)
// // console.log(person[x])
// // }
// // for(var x of details){
// //     console.log(x)
// // }
// // // for(var x of person){
// // //     console.log(x)
// // // }
// // for(var x in details ){
// //     console.log(x)
// //     console.log(details[x]) 
// // }
// // for (var x in person){
// //     console.log(x)
// //     console.log(person[x])
// // }
// // var b=()=>{
// //     var a=10;
// //     var b=10;
// //     console.log(a);
// //     console.log(b);
// //     return "this is a arrow function"
// // }

// //console.log(b())
// // var k=b();
// // console.log(k)
// // var a=30
// // var b=20
// // console.log(a)
// // console.log(b)
// // if(a>b){
// // console.log("a is greater than b")
// // }
// // var a=10
// // var b=20
// // if(a>b){
// // console.log("a is greater than b")
// // }else{
// //     console.log("a is smaller than b")
// // }
// // var i =30;
// // // console.log(b)
// // // console.log(b)
// // // console.log(b)
// // for( var i=0;i<10;i++){
// //     console.log(i)
// // }
// // function adding(a,b){
// //     console.log(a+b)
// // }
// // adding()
// // //adding(2,3)
// // //default parameter
// // function sub(a=20,b=10){
// //     console.log(a-b)
// // }
// // sub()
//  function sub(a=10,b=null,c=30,d=null){
//     console.log(a,b,c,d)
//    // console.log(a-b)
// }
// //sub(5)
// //sub(30,20)
// //sub(undefined,10)
// // sub(undefined,20,null,undefined)
// // //ES5-syntax to see the extra args compare to parameter
// // function add(a,b){
// //     console.log(a,b)
// // console.log(arguments) //e argment obj vache args all store chesukuntundhi.
// // }
// // add(10,20,30,40)
// // //ES6-restparameter
// // //rest parameter is last parameter in the parameters list

// // function add(a,b,...c){
// //     console.log(a,b)
// //     console.log(c)
// //     console.log(arguments)
// // }
// // add(10,20,30,40,56,67,78,98,78,34,565)
// //arrow function in args,restparam
// // var a=(a,b,...c)=>{
// //     console.log(a,b)
// //     console.log(c)
// //     //console.log(arguments)

// // }
// // a(10,20,30,40,50,60)
// //var hoisting
// // console.log(a,b,c)
// // var a=10
// // var b=20
// // var c=30
// // console.log(a,b,c)
// // //let hoisting
// // //console.log(a1,b1)
// // let a1=10
// // let b1="hello"
// // console.log(a1,b1)
// //global scope
// // var a=10;
// // var b=20
// //let a=10;
// //let b=30;
// // function sum(){
// //     //block scope
// //     console.log(a+b)
// // }
// // sum()
// //sum()
// // closure
// // function hello(a,b){
// //     console.log(a,b)
// //     return function bye(){
// //         return a+b
// //     }
// // }
// // //console.log(hello())
// // let k=hello(1,2)
// // // console.log(k) //hello nunchi vache return ekkada store avuthundhi
// // console.log(k())
// // function A(a,b){
// //     return function B(){
// //         return a+b
// //     }
// // }
// // console.log(A(1,2)())
// // function one(){
// //     console.log("this is a first function")
// // }
// // function two(a){
// //     console.log("this is a second function")
// //     //console.log(a)
// //     a()
// // }
// // two(one)
// // var employee={
// //     name:"varaprasad",
// //     age:25,
// //     phno:6843773833,
// //     email:"bhbdhsdg@gmail.com"
// // }
// // console.log(employee)
// // console.log(employee.name)
// // console.log(employee["age"])
// // //console.log(employee[phno])
// //constructor way
// // function personName(name,age){
// //     console.log(this)
// //     this.name=name
// //     this.age=age
// //     console.log(name,age)
// // }
// // var ravi=new personName("ravi",30)
// // console.log(ravi)
// // var b=new personName("kiran",65)
// // console.log(b)
// //Factory function
// //in factory function we will return key value pair
// // function data(name,age){
// //     return{
// //         name:name,
// //         age:age,
// //     }
// // }
// // console.log(data("kiran",30))
// // var k=data("kiran",30)
// // //console.log(k())
// //classical way
// // function Person(){
// //     constructor(name,place,age){
// //         this.name=name
// //         this.place=place
// //         this.age=age
// //         console.log(this.name,this.place,this.age)
// //     }
// // }
// // let test=new Person("raju","hyd",24)
// // console.log(test.name)
// // var person={
// //     name:"ravi",
// //     age:22
// // }
// // console.log(person)
// // //updating
// // person.name="kiran"
// // console.log(person)
// // //adding new property
// // person.location="hyd"
// // console.log(person)
// // //deleting anb item in person object
// // delete person.name
// // console.log(person)
// // //checking if a property exists or not
// // console.log(person.hasOwnProperty("name"))
// // //if we access key which is not present we get undefined in object
// // var a="apple,banana,orange"
// // console.log(a)
// // console.log(a.split(" "))
// // console.log(a.includes("banana"))
// // var a="hi"
// // console.log(a.repeat(3))
// // var obj={
// //     name:"ravi",
// //     age:30,
// //     city:"hyd",
// //     play:function(){
// //        console.log(this) 
// //     }
// //     // play2:()=>{
// //     //     console.log(this)
// //     // }
// // }
// // console.log(obj)
// // //console.log(obj.play())
// // obj.play()//its getting current obj.
// // console.log(this)//if u check object in global it refers to window object
// // //console nu function,block,gloabal scope lo rayachu
// // //console nu function declaration lo rasthunna
// // function hello(){
// //     console.log(this)
// // }
// // hello()
// // var fun=function(){
// //     console.log(this)
// // }
// // fun()
// // var fun2=()=>{
// //     console.log(this)
// // }
// // fun2()
// // //obj.play2();
// var obj={
//     name:"ravi",
//     age:30,
//     city:"hyd",
//     play:()=>{
//         console.log(this)
//         var hello=()=>{
//             console.log(this)
//         }
//         hello()
//     }
// }
// console.log(obj)
// obj.play()
// var nam="kiran"
// var age=40
// var obj={
//     name:"ravi",
//     age:30,
//     city:"hyd",
//     play:function(){
//         console.log(this)
//         console.log(this.name)
//         console.log(this.age)
//         var hello=()=>{
//             console.log(this)
//             console.log(this.name)
//             console.log(this.age)
//         }
//         hello()
//     }
// }
// console.log(obj)
// obj.play()
// var obj2={
//     name:"kiran",
//     age:20,
//     play:function(){
//         console.log(this)
//     }
// }
// console.log(obj2.name)
// obj2.play()//onj2ref veru obj reference difference two elaga kalusthayi ante
// //by using "change of this reference " we have 3 methods
// //call()  apply() bind()
// //call
// var arr=[1,2,3,4,5]
// function reversearr(ar1){
//     var newarr =[]
//     for(var i=4;i<ar1.lenth;i--) {
//         if(newarr.includes(i))
//         {
//             return 
//         }

//     }


// }
// console.log(reverse(arr))

// function evennumber(a){
//     for(i=0;i<a.length;i++){
//       if(i%2==0) {
//         return "even number in the array"
//       } 
//     }
//     return "even number not present in the array"

// }
// console.log(evennumber(arr))

//  console.log("one")
//  window.setTimeout(()=>{
//     console.log("two")
//  },1000)
//  //console.log("two")
//  console.log("three")
var j 
console.log(j)
var k=null
console.log(k)

 