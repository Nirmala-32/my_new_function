//console.log(this)
console.log(window)
//console.log(document)
//console.dir(document)//it will give indetail object form about document
console.log(window.document)
console.dir(window.document)
console.log(document.childNodes)
console.dir(document.childNodes)
console.log(document.childNodes[1])
console.dir(document.childNodes[1])
//console.log(document.childNodes[1].childNodes[2])
console.log(document.childNodes[1].childNodes[2])
console.dir(document.childNodes[1].childNodes[2])
console.dir(document.childNodes[1].childNodes[2].childNodes[1])
document.childNodes[1].childNodes[2].childNodes[1].innerText="Good Morning Reshwanth"
console.log(document.childNodes[1].childNodes[2].childNodes[1].innerText)
//document obj nunchi html  element get chesukovali ante big big lines rayali
//alaga kakunda we have 5 methods to get html element from doc object
//document object and DOM both are same
//selectors
//getElementByID
//getElementsByClassName
//getElementByTagName
//querySelector
//querySelectorAll
//particular id get chesukovadaniki and colors apply cheyadaniki selectors work avuthayi
console.log(document.childNodes[1].childNodes[2])
document.childNodes[1].childNodes[2].style.background="purple"
document.childNodes[1].childNodes[2].style.color="whitesmoke"
//getting element by using tag
var a=document.getElementById('heading1')
console.log(a)
a.style.background="blue"
a.style.color="red"
//getting html element in js by using classname 
var b=document.getElementsByClassName('one') 
console.log(b)
//getting html elemnet in js by using tagname
var c=document.getElementsByTagName('h1')
console.log(c)
var h4=document.getElementsByTagName('h4')
console.log(h4)
//queryselector
//by using classname tagname id we can get particular element
//class one ane name tho chala element vunnayi but okate kavali ante edi use chestham
//classname
var g=document.querySelector('.one')
console.dir(g)
//id base
var g=document.querySelector('#one')
console.dir(g)
//first occurence esthundi by using queryselector
var g=document.querySelector('h4')
console.log(g)
//queryselectorall 
//all occurence of tag,class,id it will get
var h=document.querySelectorAll('h4')
console.log(h)
var h=document.querySelectorAll('.one')
console.log(h)
var h=document.querySelectorAll('#one')
console.log(h)
//dom traversing 
var div1=document.getElementById('div1')
console.dir(div1)
console.log(div1.childNodes[3].innerText)
//elaga get chesukokunda element to element move avvadaniki dom traversing use chestham
//parent   //Element.parentElement()
//children  //Element.firstElementChild()
//siblings   //Element.children()
             //Element.lastElementChild()
       //getting parent element
       //before that u should get one element from html
  var div2=document.getElementById('div2')
  console.dir(div2)
  var parent=div2.parentElement
  console.log(parent)          
  //parent element use chesi properties apply cheyachu
  parent.style.background="orange"
  console.log(parent)
  //children
  //edhe div2 ki child evaru vunnaro chudham
  var children=div2.children
  console.log(children)
  //firstelementchild
  var firstelement=div2.firstElementChild
  console.log(firstelement)
  //lastelementchild
  var lastelement=div2.lastElementChild
  console.log(lastelement)
  //sibling
  //previousElementsibling
  //nextElementsibling
  var presibling=div2.previousElementSibling
  console.log(presibling)
  var nextsibling=div2.nextElementSibling
  console.log(nextsibling)
  //creating element in js file and attaching to DOM
  //how to create element by our own

//Event handlers
//within the page lo events add cheyadam
 //addEventListener js lo oka functionality
 //oka element ki event add cheyadam,event add chesi edho oka functionality chestham
 //adding events to the dom 
 //div2.addEventListener(handlers,eventtobeadded(function),usecapture)
//  div2.addEventListener("click",function(){
//   alert("this is a alert message")
//  })
function clickEvent(){
  alert("This is a alert message")
}
//div2.addEventListener("click",clickEvent,false)

//button create in html now i want to get it from html
var btn=document.getElementById("click")
function btnclick(){
  alert("Button clicked")
}
btn.addEventListener("click",btnclick,false)
//example of using bubbbling and caapturing
var div=document.getElementById("outer")
div.addEventListener("click",function(){
  alert("div capturing")
},true)
div.addEventListener("click",function(){
  alert("div bubbling")
},false)
var div2=document.getElementById('div2')
div2.addEventListener("click",function(){
  alert("event attached to div")
})
var div2=document.getElementById('div2')
div2.addEventListener("mouseenter",function(){
  alert("mouse enter fire div")
})

//event delegation
//i want to add event listener for table
//get table element from html
var tab=document.getElementById('table')
tab.addEventListener("click",function(){
  alert("table clicked")
})
//getting orderlist from html
var list=document.getElementById("ollist")
list.addEventListener("click",function(){
  alert("you clicked the list")
})
//improving js application performance
//setInterval
//setTimeout
//setInterval:after certain time tharuvatha a functionality garuguthune vuntundhi stop vundadhu
console.log("hello")
//syntax:setInterval(()=>{},1000(timer))
// setInterval(()=>{
//   console.log("hello world")
// },2000)
//setTimeout
//okasari execute iye stop avuthundhi
// setTimeout(()=>{
//   console.log("hello Reshwanth")
// },2000)
//syntaxfor setTimeout:
//setTimeout(function,delaytime,argument)
// setTimeout(()=>{
//   console.log("hello this is a timer function which will execute after 1 second")
// },3000)
// function dely(a,b){
//   console.log(a+b)
//   console.log("hello this is a timer function which will execute after 1 second")

// }
//setTimeout(dely,3000,1,2)
//setInterval(dely,4000)
//let interval=setInterval(dely,2000)
//clearInterval(interval)
// function dely(a,b){
//   console.log(a+b)
//   console.log("hello this is a timer function which will execute after 1 second")

// }
// console.log('this is a sample statement 1')
// setTimeout(dely,1000,1,2)
// console.log("this is a sample statement2")
// //set interval call chesthey okasari agipovali
// let interval=setInterval(dely,2000)
// setTimeout(()=>{
// clearInterval(interval)
// },4000)
//2000sec lopala execution stop cheyali ante clearTimeout use chestham
//settimeout clear cheyadaniki cleartimeout use chestham
function dely(a,b){
  console.log(a+b)
  console.log("hello this is a timer function which will execute after 1 second")

}
console.log('this is a sample statement 1')
//setTimeout(dely,1000,1,2)
let settimeout=setTimeout(dely,1000,1,2)
clearTimeout(settimeout)
console.log("this is a sample statement2")
//set interval call chesthey okasari agipovali
let interval1=setInterval(dely,2000)
setTimeout(()=>{
clearInterval(interval1)
},4000)
//now we get div element from html
var div=document.getElementById('performance')



