// function dely(a,b){
//     console.log(a+b)
//     console.log("hello this is a a timer function which will execute after 1 second")
// }
// console.log("this is a sample statement1")
// //setTimeout(dely,0,1,2)
// let settimeout=setTimeout(dely,2000,1,2)
// clearTimeout(settimeout)
// console.log("this is a sample statement2")
// //setInterval(dely,3000)
//  let interval=setInterval(dely,2000)
// // //how can we stop this setinterval by using clearinterval
//  setTimeout(()=>{
//     clearInterval(interval)
//  },4000)

var div=document.getElementById("performance")

var n=0
var t=0
var d=0
var throttle=true
var debounce;
var normal=document.getElementById('n')
var throttling=document.getElementById('t')
var debouncing=document.getElementById('d')

function normalEvent(){
    n++
    normal.innerText=`normal count:${n}`;
}
// function thorttlingEvent(){
//     setTimeout(()=>{
//     t++
//     throttling.innerText=`throttling count:${t}`;
//     },1000)
// }
function throttlingEvent(){
    if(throttle==true){
        throttle=false
        t++
    throttling.innerText=`throttling count:${t}`;
    }

setTimeout(()=>{
    throttle=true
},3000)
}
function debouncingEvent(){
    window.clearTimeout(debounce);
 
        debounce=window.setTimeout(()=>{
        d++;
        debouncing.innerText=`debouncing count:${t}`;
    },3000)
    //window.clearTimeout(debounce);
 
   
}
div.addEventListener("click",()=>{
    normalEvent();
    throttlingEvent();
    debouncingEvent();
})

localStorage.setItem('name','nirmla')
console.log(localStorage.getItem('name'))
//destructuring
var arr=[1,2,3]
var[a,b,c]=arr
console.log(a,b,c)