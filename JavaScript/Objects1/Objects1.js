var person={
    name:"nirmala",
    age:20,
    job:"developer"
    //console.log(person)
}
console.log(person)
console.log(person.name)
//1.here we have name as key and nirmala as value now i want to change the value of name to reshwanth
//so we can do it like this by using object name or reference name and then dot operator and then
//the key name and then assign the new value to it
//[updating or modifying the value of an object key]
//objectname.keyname=newvalue
// person.name="reshwanth"
// console.log(person)
// console.log(person.name)
//2.(adding new key value pair to an object)
//we can add new key value pair to an object which is not available in above by using the same method as above
//[objectname.newkeyname=newvalue]
//here we are adding new key value pair to the object person
// person.location="hyd"
// console.log(person)
// console.log(person.location)
//3.deleting a key value pair from an object
//we can delete a  key value pair from an object by using delete operator
//[delete objectname.keyname]
//here we are deleting the key value pair from the object person
// delete person.name
// console.log(person)
// console.log(person.name)
// person.name="nirmala"
// console.log(person)
//4.checking whether a key is present in object or not
//we can check whether a key is present in an object or not by using in operator
//[keyname in objectname]
// console.log("name" in person)  //true
// console.log("color" in person) //false
//or 5.using hasOwnProperty method by using [objectname.hasOwnProperty(keyname)]
//console.log(person.hasOwnProperty("name"))
//6.using for in loop to iterate through the object
//[for(key in objectname0]
//here we are iterating through the object person and printing the key and value of the object)]
// for (key in object){
//     console.log(key,object[key])
// }
for (name in person){
    console.log(name,person[name])
}

//7.Merging two objects
//we can merge two objects by using Object.assign() method
//[Object.assign(object1,object2)]
//here we are merging two objects person and person1
var person1={
    name:"reshwanth",
    age:24,
}
var obj3=Object.assign(person,person1)
console.log(obj3)
//8.cloning an object
//we can clone an object by using Object.assign() method
//[Object.assign({},objectname)]
//here we are cloning the object person and storing it in a new object obj4
var obj4=Object.assign({},person)
console.log(obj4)
//9.spread operator to clone an object
//we can vlone an object by using spread operator
//[...objectname]
//here we are cloning the object person and storing it ina new object obj5
var obj5={name:"suvi",age:40,city:"hyd"}
var obj6={age:50,job:"developer"}
var obj7={...obj5,...obj6}
console.log(obj7)
//10.using Object.keys() method to get the keys of an object how manykeys are there in the object
//[Object.keys(objectname)]
//here we are getting the keys of the object person and storing it in a new array keys
//var keys=Object.keys(person)
//console.log(keys)
var keys=Object.keys(obj7)
console.log(keys)
//11.using Object.values()method to get the values of an object how many values are there in the object
//Object.values(objectname)
//here we are getting the values of the object person and storing it in a new array values
var values=Object.values(obj7)
console.log(values)
//12.usingObject.entries() method to get the key value pair of an object how many key value pairs are there in the object
//[Object.entries(objectname)]
//here we are getting the key value pair of the object person and storing it in a new array entries
var entries=Object.entries(obj7)
console.log(entries)
//13.using Object.freeze() method to freeze an object
//[Object.freeze(objectname)]
//here we are freezing the object person and storing it in a new object obj8
//this will not allow us to modify the object person
// var obj8=Object.freeze(person)
// obj8.name="reshwanth" //this will not work because we have frozen the object person
// console.log(obj8)