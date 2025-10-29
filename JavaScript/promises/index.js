// // // //how to create promises
// // // var pro=new promise((resolve,reject)=>{

// // // })
// // var pro=new Promise((resolve,reject)=>{
// //     //resolve()
// //     reject()
// // })
// // pro.then(function (){
// //     console.log("promise resolved")
// // })
// // .catch(function (error){
// //     console.log("promise rejected")
// // })
// //now calling api 
// var pro=new Promise((resolve,reject)=>{
//     var a=true;
//     if(a){
//         resolve()
//     }
//     else{
//         reject()
//     }

// })
// pro.then(function (){
//     console.log("promise resolved")
// })
// pro.then(function(){
//     console.log("second promise ")

// })
// .catch(function(error){
//     console.log("promise rejected")
// })
//callback function example we r writing promises
function First(){
    return new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
      console.log("first function")  
      resolve()
        },1000)
    })
}
function Two(){
    return new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
             console.log("second function")
resolve()

        },2000)
       
    })
}
function Three(){
    return new Promise(()=>{
        window.setTimeout(()=>{
            console.log("third function")
        },2000)
    })
}
//promises calling
// First()
// .then(Two)
// .then(Three)
//async and await calling
// async function hello(){
//     await First()
//     await Two()
//     await Three()
// }
// hello()
//what is api calls
var Apidata
fetch('https://jsonplaceholder.typicode.com/posts')
.then(d=>d.json()
.then(data=>{
    Apidata=data
    display()
})
)
.catch((error)=>{
    console.log(error)
})
function display(){
    console.log(Apidata)
}