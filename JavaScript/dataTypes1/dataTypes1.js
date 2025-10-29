//  var a = 10,20,30,40
//  console.log(a)
var a=[10,20,30,44]
console.log(a)

var apple="Apple"
var banana="banana"
var orange="orange"

var a=[10,20,30,40,apple,banana,orange]
//console.log(a)
//in the above array u get ref error at apple considered as variable should define the apple with var apple='apple'
//in above array we are defining variables and numbers
console.log(a)

var a=[10,20,30,40,apple,banana,orange,"ravi",undefined,null,true,false,[10,20,30]]
console.log(a)
console.log(a.length)