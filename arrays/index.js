// // var a=[1,2,3,4,5]
// // console.log(a.length)
// // var arr=[1,2,3,4,5,"hello","hai",true,null,undefined,{},[[[]]],[[]]]
// // console.log(arr)
// // //how to add new element in the array last
// // arr.push("bye")
// // console.log(arr)
// // //adding new item at statrting
// // arr.unshift("hi")
// // console.log(arr)
// // //adding element in the array in anywhere
// // arr.splice(3,1,"how are you?")
// // console.log(arr)
// // //removing all the elements in the array
// // arr.splice(0,arr.length)
// // console.log(arr)
// // console.log(arr.length)
// // arr.length=0
// // console.log(arr.length)
// // console.log(arr)
// //how to find array elements
// var arr=[1,2,3,4,5,5,5,6,7,8,9,10,"hello","hai",true,false]
// //indexof
// console.log(arr.indexOf(5))//it retuen value present in first occurence//4
// console.log(arr.indexOf(13))//-1 if value not there
// //lastIndexof
// console.log(arr.lastIndexOf(5))//it return last occurence of that value in the array//6
// console.log(arr.includes(5))
var arr=[1,2,3,8,9,10]
// console.log(arr)
// console.log(arr.length)
// console.log(arr.length-1) //it will give index values
// function find(a){
// for(i=0;i<arr.length;i++){
//     if(a[i]==10){
//         return "11 is present"
//     }
    
// }
// return "11 is not present"
// }
// console.log(find(arr))
// var a=[1,2,3,4,5,11]
// function find(a){
// for(var i of a){
//     if(i==11){
//         return "11 is present"
//     }
//     }
//     return "11 is not present"
// }
// console.log(find(a))
// function find(a){
//     if(a.includes(11)){
//         return "11 is present"
//     }
//     else{
//         return "11 is not present in the array"
//     }
// }
// console.log(find(arr))
// var arr=[1,2,3,11,13]
// function find(a){
//     if(a.indexOf(14)){
//          return "11 is present"
//      }
//     else{
//        return "11 is not present in the array"
//     }
// }
// console.log(find(arr))
// var arr=[1,2,3,11,13]
//for each
// var a=[1,2,7,4,2,9]
// a.forEach((v,i)=>{
//     console.log(v,i)
// })
// var arr=[1,2,3,4,5,6]
// // for(var i of arr){
// //     //console.log(arr)  //here it return values
// //     console.log(i*i)
// // }
// var k=arr.map(i=>i*i)   //here it return array in map
// console.log(k)
//var a=[90,3,1,2,8,10,1]
// var m=a.filter(function (v){
//    console.log(v)
//     return v>5

// // })
// // console.log(m)
// var k=a.reduce((m)=>
// {
// console.log(m)
// })
// console.log(k)
var arr1=[1,2,3,4,7,8,2,3,1,3,9,90,11]
var Aset=new Set(arr1)
console.log(Aset)
var Aset=[new Set(arr1)]
console.log(Aset)
var Aset=[...new Set(arr1)]
console.log(Aset)