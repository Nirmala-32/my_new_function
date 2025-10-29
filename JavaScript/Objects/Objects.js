// // to create object we have multiple ways
// //1.object literal way

// let person={
//     name:"nirmala",
//     age:23,
//     job:"developer",
//     hobbies:["reading,writing","studying"],
//     address:{
//         city:"banglore",
//       state:"karnataka" , 
//           buy:function(){
//         console.log("you can buy the car")
//       }
//     }
// }
// console.log(person)
// console.log(person.name)
// console.log(person["age"])
// console.log(person.hobbies[1])
// console.log(person.address.city)
// console.log(person.address.buy)


// create object using new keyword
// let person=new Object()
// person.name="nirmala",
// person.age=23,
// person.job="developer",
// person.hobbies=["reading","writing","studying"],
// person.address={
//     city:"banglore",
//     state:"karnataka"
//     //buy:function(){
//        // console.log("you can buy the car")
//    // }
// }
//  console.log(person)
//  console.log(person.name)
//  console.log(person["age"])
//  console.log(person.hobbies[1])
//  console.log(person.address.city)
// //console.log(person.address.buy)

//2.1.create object using constructor function
//function(){
//it is a function which is used to create object
// it is a blueprint for craeting object}
//function person(name,age,job,hobbies,address){ //normally we use parameter in constructor function
   //parameters we take and assign to varaiable this.name=name                                          
        // this.name=name
        //   this.age=age
        //   this.job=job
        //   this.hobbies=hobbies
        //   this.address=address                  // to develop the functionality of the object
        //                                       //this is a keyword which is used to 
                                              // //refer the current object
//}
//var person1=new person()//when we send the augs here to the constructor function,it will create the object
//var person1=new person("nirmala",23,"developer",["reading","writing"],{city:"banglore",state:"karnataka"})
//var person2=new person("reshwanth",25,"Hr","reading","hyd")
// console.log(person1)
// console.log(person1.name) //this is a property of the object
// console.log(person1["age"])
// console.log(person1.hobbies[0])
// console.log(person1.address)
// console.log(person1.address.city)
// console.log(person1.address.state)
// console.log(person2)
// console.log(person2.name) //this is a property of the object
// console.log(person2["age"])
// console.log(person2.hobbies)
// console.log(person2.address)


//3.creating object using factory function
//we can create object using function and return the object from the function
//key value pair is returned from the function
// function data(name,age,job,hobbies,address){
//     return{
//         name:name,
//         age:age,
//         job:job,
//         hobbies:hobbies,
//         address:address
//     }

// }
//when we are calling function we give the arguments to the function
// data("nirmala",23,"developer",["reading","writing"],{city:"banglore",state:"karnataka"})
//we can create variable assign the  data function to the variable 
// var k=data("nirmala",23,"developer",["reading","writing"],{city:"banglore",state:"karnataka"})
// console.log(k)
// console.log(k.name) //this is a property of the object
// console.log(k["age"])
// console.log(k.hobbies)
// console.log(k.hobbies[0])
// console.log(k.address)
// console.log(k.address.city) //when we store data function in the variable
//                               //that variable acts as an object
//  console.log(k.address.state) //this is a property of the object

//4.creating object by using classical way
function test(){
    constructor(name1,age,job){
        this.name1=this.name,
        this.age=this.age,
        this.job=this.job,
       // console.log(this.name,this.age,job)
}
}
var test1=new test("nirmala",23,"developer")
console.log(test1)
console.log(test1.name1)

