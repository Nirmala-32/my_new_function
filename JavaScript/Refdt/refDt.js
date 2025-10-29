//sorting reference data type

var details=[
    {name:"ravi",age:34,address:"hyd",job:"developer",empId:1},
    {name:"reshwanth",age:45,address:"atp",job:"CEO",empId:8},
    {name:"suvi",age:56,address:"bang",job:"hr",empId:3},
    {name:"prasi",age:23,address:"jammu",job:"colonel",empId:4}
]
//console.log(details)
//now i want to do sorting on age,name,empid
details.sort((a,b)=>a.empId-b.empId)
details.sort((a,b)=>a.age-b.age)
//if you want to do sort on name its not possible we have to use localcompare()method
//localcompare decides which alphabet is first and which is last like that
details.sort((a,b)=>a.name.localeCompare(b.name))
console.log(details)

//Map

var m=new Map()
m.set("name","ravi")
console.log(m)
m.set("age",30)
console.log(m)
console.log(m.size)
//now i will take array and i will add to it(map)
var arr=[1,2,3,4]
for(i in arr){
    m.set(i,arr[i])
}
console.log(m)
//weakmap
var weakMap=new WeakMap()
var obj1={name:"pranjal"}
var obj2={name:"pranav"}
weakMap.set(obj1,"engineer")
weakMap.set(obj2,"designer")
console.log(weakMap.get(obj1))
console.log(weakMap.get(obj2))

