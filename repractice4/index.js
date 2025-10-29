var div=document.getElementById('performance')
var n=0
var t=0
var d=0
var throttle=true
var debounce;
var normal=document.getElementById('n')
var throttling=document.getElementById('t')
var debouncing=document.getElementById('d')

function normalEvent(){
    n++;
    normal.innerText=`normalcount:${n}`
}
function throttlingEvent(){
    if(throttle===true){
throttle=false
t++;
    throttling.innerText=`throttling count:${t}`
    }
setTimeout(()=>{
throttle=true
},3000)
    }

function debouncingEvent(){
window.clearTimeout(debounce)
   debounce= window.setTimeout(()=>{
        d++;
        debouncing.innerText=`debounce count:${d}`
    },3000)

}
console.log(debounce)
div.addEventListener('click',()=>{
    // normalEvent()
    // throttlingEvent()
    // debouncingEvent()

})
//objects
var original={
    name:'ravi',
    age:30,
    city:'hyd',
    job:{
        role:'developer',
        dept:'it',
        salary:80000
    }
}
//var copy=original
// original.age=32
// copy.job.salary=90000
// copy.job.dept='ceo'
//console.log(original)
//console.log(copy)

var original={
    name:'ravi',
    age:30,
    city:'hyd',
    job:{
        role:'developer',
        dept:'it',
        salary:80000
    },
    arr:[1,2,3]
}
var copy=JSON.parse(JSON.stringify(original))
copy.job.dept='ceo'
original.name='kiran'
original.arr[0]=10
//console.log(original)
//console.log(copy)
//shallow copy
var original={
    name:'ravi',
    age:30,
    city:'hyd',
    job:{
        role:'developer',
        dept:'it',
        salary:80000
    },
    arr:[1,2,3],
    play:function(){
    console.log("hai how are you")
    }
}
var copy=Object.assign({},original)
original.age=34
copy.job.dept='ceo'
original.job.salary=10000
copy.arr[0]=20
console.log(copy)
console.log(original)



