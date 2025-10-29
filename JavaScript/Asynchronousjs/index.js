// // // // // console.log("asynchronousjs")
// // // // // //synchronous
// // // // // console.log("one")
// // // // // console.log("two")
// // // // // console.log("three")

// // // // //asynchronous little bit delay
// // // // console.log("one")
// // // // window.setTimeout(()=>{
// // // //     console.log("two")
// // // // },2000)
// // // // console.log("three")

// // // //callback
// // // //which is passed as argument to another function
// // // var data=fetch( '')
// // // function displayData(name){
// // //     console.log("data from the api call",name)
// // // } 
// // // displayData(data)
// // function fetchData(hello){
// //     var data="varaprasad"
// //     window.setTimeout(()=>{
// //         hello(data)

// //     },2000)
// // }
// // function displayData(name){
// //     console.log("data from the api call ",name)
// // }
// // fetchData(displayData)

// function one(nextfunction){
//     var a=10
//     console.log("one function")
//     window.setTimeout(()=>{
// nextfunction()
//     },2000)
// }
// function two(nextfunction){
//     console.log("second function")
//     window.setTimeout(()=>{
//         nextfunction();

//     },3000)
// }

// function three(hai){
//     console.log("third function")
//     window.setTimeout(()=>{
//         hai()
//     },4000)
// }
// function four(){
//     console.log("fourth function")
// }
// //one(two)
// one(() => { 
//     two(() => { 
//         three(()=>{
//             four() });
//         });
//     });