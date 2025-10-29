var arr=[1,2,3,4,5,5,5,6,7,8,9,10,"hello","hai",true,false]
//indexof
console.log(arr.indexOf(5))//a particular element yokka index esthundhi(4))
//includes
console.log(arr.includes(5))//it will return true or false whether that element presented or not
// var arr1=[1,2,3,4,8,9]
// function find(a){
// for(var i of a){
//     console.log(i)
//    // console.log(a)
// }
// }
// find(arr1)
var arrR=[{name:'ravi'},{name:'kiran'},{name:'suresh'}]
console.log(arrR.indexOf("ravi"))
// function findR1(val){
// val.find((val1)=>{
//     if(val1.name==="ravi"){
//         console.log(" ravi is present")
//     }
//     else{
//         console.log("ravi is not present")
//     }
//  })
 

// }
// console.log(findR1(arrR))

function findR(val){
    val.find((val1)=>{
        if(val1.name==="ravi"){
            return 'ravi is presnet'
        }else{
            return 'ravi is not present'
        }


  })

 }
 //console.log(findR(arrR))
var arrR = [{ name: 'ravi' }, { name: 'kiran' }, { name: 'suresh' }];

function findR(val) {
    const found = val.find((val1) =>val1.name === "ravi");
    if (found) {
        return "ravi is present";
    } else {
        return "ravi is not present";
    }
}


console.log(findR(arrR));
var arr=[1,2,3,5,6]
var newarr=[]
for(i of  arr){
    console.log(i*i)
    newarr.push(i*i)
}
console.log(newarr)
//arrow function

var k=arr.map((i)=>
i*i
)
console.log(k)
//anonymous function
var k=arr.map(function (m){
    return m*m
})
console.log(k)
var m=new Map()
console.log(m)
//m.set({name:"reshwanth"},details)
console.log(m)
//
let msg;
if(msg>=50){
    msg="pass"
}else{
    msg="fail"
}
console.log(msg)
 var  fruits=["apple","banana","strawberry"]

for (let index in fruits) {
  console.log(index);       // index: "0", "1", "2" (as strings)
  console.log(fruits[index]); // value: "apple", "banana", "cherry"
}

//scope
//accessibility and life time of that variable

let a=13
var b=24
function sum(){
  var a=23
  var b=33
    console.log(a,b)
}
sum()
//console.log(a,b)
console.log(fruits.length)
var arr1=[1,2,3,4,11,13]
function find(a){
    for(var i of a){
        if(i==11){
            return "11 is present"
        }

    }
    return "11 is not present"

}
//console.log(find(arr1))

function find(a){
    if(a.includes(11)){
        return "11 is present in the array"
    }else{
        return "11 is not present in the array"
    }
}
console.log(find(arr1))
console.log(arr1.indexOf(18))