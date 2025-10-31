var a=document.getElementById('heading1')
console.log(a)
a.style.backgroundColor='red'
a.style.color='yellow'
//get element by class name
var b=document.getElementsByClassName('one')
//console.log(b)
b[2].innerText='Good Night'
console.log(b)
//get element by tag name
var c=document.getElementsByTagName('h4')
console.log(c)
//query selector
var d=document.querySelector('.one')
console.log(d)
var e=document.querySelector('#one')
console.log(e)
//queryselector all
var g=document.querySelectorAll('h4')
console.log(g)
var h=document.querySelectorAll('.one')
console.log(h)
//dom traversing
var div2=document.getElementById('div2')
console.log(div2)
var first=div2.firstElementChild
console.log(first)
var last=div2.lastElementChild
console.log(last)
var previous=div2.previousElementSibling
console.log(previous)
var next=div2.nextElementSibling
console.log(next)
var newelement=document.createElement('h1')
newelement.textContent='this is a new element'
newelement.setAttribute('id',newelement)
newelement.setAttribute('class',newelement)
div2.appendChild(newelement)
console.log(newelement)
var h1=document.createElement('h1')
h1.textContent="this is heading tag"
console.log(h1)
var div1=document.getElementById('div1')
div1.appendChild(h1)
var p=div1.firstElementChild
console.log(p)
div1.insertBefore(h1,p)
div1.appendChild(h1)
// var first1=document.getElementById('first')
// div1.replaceChild(h1,first)
//eventhanlders
// div2.addEventListener("click",function(){
//     alert("this is alert message")
// })
function clickEvent(){
    alert("this ia alert")
}
div2.addEventListener('click',clickEvent)

var btn=document.getElementById('click')
//btn.addEventListener
function btnclick(){
    alert("button clicked")
}
btn.addEventListener('click',btnclick,true)

//getting outer
var div=document.getElementById('outer')
//capturing
div.addEventListener("click",function(){
    alert('div capturing')
})
//bubbling
div.addEventListener("click",function(){
    alert('div bubbling')
})
//table
var tab=document.getElementById('table')
tab.addEventListener('click',function btn(){
    alert("table clicked")
})
//ol
var ol=document.getElementById('ollist')
ol.addEventListener('click',function list(){
    alert('list clicked')
})
//ul
var ul=document.getElementById('ullist')
ul.addEventListener('click',function ul(){
    alert('ul clicked')
})
