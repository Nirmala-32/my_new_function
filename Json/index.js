// var obj={
//     name:"ravi",
//     role:"developer",
//     city:"hyd"
// }
// console.log(obj)
// console.log(typeof(obj))
// var jsonobj=JSON.stringify(obj)
// console.log(jsonobj)
// var normalobj=JSON.parse(jsonobj)
// console.log(normalobj)

// var name="raju"
// var obj1={
//     name:name
// }
// console.log(obj1)
// var a=[1,2,4]
// function checkEven(a){
// for(i of a){
//     if(i%2!=0){
//         return false
//     }
   
// }
//  return true

// }
// console.log(checkEven(a))
// //console.log(a.every(i=>i%2==0))
// //console.log(a.some(i=>i%2==0))
// var a="hello"
// var k=Array.from(a)
// console.log(k)
// var m=[1,2,3,4,7]
// console.log(m.indexOf(1))

var weakmap=new WeakMap()
var obj1={
    name:"varaprasad"
}
var obj2={
    name:"reshwanth"
}
weakmap.set(obj1,"engineer")
weakmap.set(obj2,"CEO")
console.log(weakmap.get(obj1))
console.log(weakmap.get(obj2))
obj2=null;
console.log(weakmap.get(obj2))
console.log(typeof("obj2"))
let myvariable;
console.log(myvariable)
console.log(typeof myvariable)

let anothervariable=null;
console.log(anothervariable)
console.log(typeof anothervariable )

let obj={
    name:null
}
console.log(obj.name)
var weakset=new WeakSet()
var obj1={name:"Reshwanth"}
var obj2={name:"ravi"}
weakset.add(obj1)
weakset.add(obj2)
obj2=null
console.log(weakset.has(obj1))
console.log(weakset.has(obj2))
