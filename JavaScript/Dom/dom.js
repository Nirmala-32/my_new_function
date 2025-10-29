// console.log(this)
// console.log(window.document)
// console.dir(window.document)
// console.dir(document.childNodes[1])  //html
// console.dir(document.childNodes[1].childNodes[2]) //body
// console.log(document.childNodes[1].childNodes[2].childNodes[1])//h1 is same in the both cases html,js
// //whatevr i wrote in the h1 tag in html everything stores here like a object
// //elements tab lo change chesthey web lo kuda change avuthundhi good morning ga
// //when we do refresh manam html lo elaga rasthey alaga print avuthundhi
// //permamnent ga change cheyali ante js lo rayali
// document.childNodes[1].childNodes[2].childNodes[1].innerText="Good Morning" 
//          //html        //body         //h1 ki changing test
//  //elaga rasthey html lo h1 lo Hello ne vuntundhi but js lo rasthye
//  //it will effecting to webpage directly elemnets lo kuda h1 good morning vasthundhi
//  //html tho work lekunda
// // console.log(document.childNodes[1].childNodes[2])
// //selectors(5)
// //getElementById
// //getElementByClassName
// //getElementByTagName
// //querySelector
// //querySelectorAll
// //console.log(document.childNodes[1].childNodes[2])
 document.childNodes[1].childNodes[2].style.color="yellow"
 document.childNodes[1].childNodes[2].style.backgroundColor="black"
document.getElementById('heading') //geid use chesukoni specific id echi element get chesukovachu
 var a=document.getElementById('heading1')
 console.log(a)
document.getElementById('heading1').style.backgroundColor="red"
 a.style.backgroundColor="red";
 a.innerText='GOOD NIGHT '
// //bu using class name
 var b=document.getElementsByClassName('one')
console.log(b)
 b[2].innerText="good night"
 console.log(b)
// //getElementByTagName
 var c=document.getElementsByTagName('h1')
 console.log(c)
 var h4=document.getElementsByTagName('h4')
 console.log(h4)
// //querySelector//i dont want all element i want only one specific elemnet which is first occurence
// var g=document.querySelector('.one')
// console.dir(g) //class
// var g=document.querySelector('#one')
// console.dir(g) //id base
// //querySelectorAll //it will give all occurences
// var h=document.querySelectorAll('h4')
// console.log(h)
// var h=document.querySelectorAll('.one')
// console.log(h)

 var div1=document.getElementById('div1')
 console.dir(div1)
// //dom traversing
 var div2=document.getElementById('div2')
 console.dir(div2)//we will get div2 element
 var parent=div2.parentElement;
 console.log(parent)
 parent.style.backgroundColor='orange'
 console.log(parent)//parent will be single
// //but children we have multiple now we get children
 var children=div2.children;
 console.log(children)
// //first element child
 var firstelement=div2.firstElementChild
 console.log(firstelement)
 var last=div2.lastElementChild
 console.log(last)
// //siblings(within the same level evi vunnayo all elements vasthayi)
// //previous sibling
// //next sibling
 var presibling=div2.previousElementSibling
 console.log(presibling)
// //next sibling
 var nextsibling=div2.nextElementSibling
 console.log(nextsibling)
// //h1 element create chesi dhaniki oka content add cheyali
// //element creation
 var newelement=document.createElement('h1')
 newelement.textContent='this is a new element'
 newelement.setAttribute('id','newelement')
 newelement.setAttribute('class','newelement')
 div2.appendChild(newelement)
// //new element creation ,get element from the dom
 var h1=document.createElement('h1')
 h1.textContent="this is heading tag"
 console.log(h1)
// //get element from the dom
 var div1=document.getElementById('div1')
 div1.appendChild(h1)
 var p=div1.firstElementChild
 console.log(p)
// //p dhani mundhu add cheyali ante insert before use chestham
 div1.insertBefore(h1,p)
// //replace child
// //replaces the existing element
var First = document.getElementById('First');
// //u need to give parent reference
div1.replaceChild(h1,First)
// //remove
// //we need to get one element and remove 
var div2=document.getElementById('div2')
// //remove chese dhani reference thesukoni 
div2.remove()
// //we removed parent element but remaining child element also removed
// //removeChild
//var delchild=div2.firstElementChild //get chesukunna element 
 //console.log(delchild)
// div2.removeChild(delchild)
// //Event Handlers
// //div2.addEventListener(Handlers,evenToBeAdded(function),usecapture)
// //bubbling phase  -->true
// //capturing phase -->false
div2.addEventListener("click",function(){
  alert("this is a alert message")
})
 function clickEvent(){
     alert("this ia a alert message")

 }
 div2.addEventListener('click',clickEvent)

var btn=document.getElementById('click')
//btn get iynaka event add chedham
function btnclick(){
    alert('button clicked')
}
btn.addEventListener('click',btnclick)
//getting outer id 
var div=document.getElementById('outer')
div.addEventListener('click',function(){
    alert('div capturing')
},true)
div.addEventListener('click',function(){
    alert('div bubbling')
})
// //we will get first div2 element
//var div2=document.getElementById('div2')
//div2.addEventListener('click',function(){
  //  alert('event attached to div')
//})
var tab=document.getElementById('table')
tab.addEventListener('click',function(){
    alert('table clicked')
})
var ol=document.getElementById('ollist')
ol.addEventListener('click',function(){
    alert('you clicked the list')
})
// console.log("hello")
// //setInterval
// window.setInterval(()=>{
//     console.log("Hello World")
// },1000)
// //setTimeout
// setTimeout(()=>{
//     console.log("Hello")
// },2000)
// function dely(a,b){
//     console.log(a+b)
//     console.log("hello this is a timer function which will exct after 1 sec")

// }
// console.log('this is a sample statement1')
// setTimeout(dely,2000,1,2)
// console.log('this is a sample statement2')
// //setInterval(dely,2000)
// let interval=setInterval(dely,2000)
// setTimeout(()=>{
//     clearInterval(interval);
// },4000)
// function dely(a,b){
//     console.log(a+b)
//     console.log("hello this is a timer function which will exct after 1 sec");

// }
// console.log('this is a sample statement1')
// //setTimeout(dely,2000,1,2)
// let settimeout=setTimeout(dely,2000,1,2)
// clearTimeout(settimeout)
// console.log('this is a sample statement2')
// let interval=setInterval(dely,2000,3,5)
// setTimeout(()=>{
//     clearInterval(interval)
// },6000)
//
var div=document.getElementById('performance')
var n=0
var t=0
var d=0
var throttle=true
var debounce;
var normal=document.getElementById('n')
var throttling=document.getElementById('t')
var debouncing=document.getElementById('d')
console.log(debouncing)
function normalEvent(){
    n++;
    normal.innerText=`normalcount:${n}`;
}
function throttlingEvent(){
    if(throttle==true){
        throttle=false
    t++;
    throttling.innerText=`throttlingcount${t}`;
}
    setTimeout(()=>{
        throttle=true
    },3000)
}
function debouncingEvent(){
   // console.log("hi")
    window.clearTimeout(debounce)

    debounce=window.setTimeout(()=>{
        d++;
        debouncing.innerText=`debouncingcount:${d}`;
    },3000)
   }

div.addEventListener('click',()=>{
    normalEvent();
    throttlingEvent();
    debouncingEvent();
})












