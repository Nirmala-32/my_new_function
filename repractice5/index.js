//this keyword which refers to curent object
var name="reshwanth"
var age=3
var obj={
    name:"ravi",
    age:30,
    city:"hyd",
     play:function(a,b,c,d){
         console.log(this)
        console.log(this.name)
     console.log(this.age)
     console.log(a+b+c+d)
      var hello1=()=>{
            console.log(this)
            console.log(this.name)
            console.log(this.age)
        }
        hello1()
        
    }
}
//console.log(obj)
//obj.play()
//console.log(this)
//function declaration
function hello(){
    //console.log(this)
}
hello()
//named function declaration
var nam=function hello(){
    //console.log(this)
}
nam()
//annonymous function
var fun2=function(){
   // console.log(this)
}
fun2()
//arrow function
var fun3=()=>{
   // console.log(this)
}
fun3()
var obj2={
    name:"kiran",
    age:20,
    play:function(){
        console.log(this)
    }
}
//obj2.play()
//chganging object reference 
//obj.play.call(obj2,1,2,3,4,5)
//obj.play.apply(obj2,[1,2,3,4,5])
//obj.play.bind(obj2,1,2,3,4,5)()
var m=obj.play.bind(obj2,1,2,3,4,5)
//console.log(m)
//m()
//template string
var a=3
var b=2
console.log(`sum of ${a} and ${b}is:${a+b}`)
var a="apple,banana,orange"
console.log(a)
console.log(a.split(" "))
var a='apple,banana,orange'
console.log(a)
console.log(a.includes("banana"))
console.log(a.startsWith('apple'))
console.log(a.endsWith('orange'))
//repeat
var a="history"
console.log(a.repeat(2))
var a="hello"
var b="world"
console.log(a.concat(b))
console.log(b.concat("i am nirmala"))
console.log(a.charAt(0))
console.log(a.indexOf('h'))

var a="hello good morning"
console.log(a.slice(0,4))
console.log(a.slice(11,-1))
console.log(a.substring(0,-1))
var a="hello world"
console.log(a.replace("world","java script"))
//garbagae collector
var a={
    name:"ravi",
    age:3,
city:"hyd"
}
var b=a
console.log(a.name)
console.log(b.age)
console.log(b.salary)
a=null
//console.log(a.name)
console.log(b.name)
