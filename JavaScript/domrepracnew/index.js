console.log(this)
//console.log(window.document)
console.dir(window.document)
console.log(document.childNodes[1])
console.dir(document.childNodes[1].childNodes[2].childNodes[1])
console.dir(document.childNodes[1].childNodes[2].childNodes[1].innerText)
console.dir(document.childNodes[1].childNodes[2].childNodes[1].innerText="Good Morning")
//console.dir(document.childNodes[1].childNodes[2].childNodes[1].innerText)
//above elements get cheydaniki we have 5 methods in js.
//now i want to change background color in(body) html through js firstwe need toget body
//for that i need to get one element from js
//getelement by id
console.log(document.childNodes[1].childNodes[2].style.color="maroon")
console.dir(document.childNodes[1].childNodes[2].style.background="aqua")
var a=document.getElementById('heading1')
console.log(a)
a.style.color='orange';
a.style.background='black';
//get elements by class name
  var b=document.getElementsByClassName('one')
  console.log(b)
//get elements by tag name
var c=document.getElementsByTagName('h4')
console.log(c)
//query selector
var g=document.querySelector('.one') //class
console.dir(g)
var g1=document.querySelector('#one')  //id
console.dir(g1)
//query selector all
var h=document.querySelectorAll('h4')  //tag name
console.dir(h)
var h=document.querySelectorAll('#one') //id name
console.log(h)
var h=document.querySelectorAll('.one') //class
console.log(h)
///parent element ni get cheyali
var div2=document.getElementById('div2')
console.log(div2)
//i need to findout parent of div2
var parent=div2.parentElement;
console.log(parent)
//we can apply properties on parent elemnet
parent.style.backgroundcolor='orange'; 
console.log(parent)
var child=div2.children;
console.log(child)
//first element child
var firstele=div2.firstElementChild;
console.log(firstele)
firstele.style.color="black";
//last element child
var lastele=div2.lastElementChild;
console.log(lastele)
lastele.style.color="black"
lastele.style.background="purple"
//sibling within same level lo eeyy elements vunnayo a elements vasthayi
var presibling=div2.previousElementSibling
console.log(presibling)
//next sibling
var nextsib=div2.nextElementSibling
console.log(nextsib)
//div1 child element
// var div1=document.getElementById('div1')
// console.log(div1)
//  var chiddiv1=div1.children;
//  console.log(childdiv1)
div2.removeChild(firstele)
// function clickEvent(){
//     alert("this is a alert message")
// }
// div2.addEventListener("click",clickEvent)
// //button getting
var btn=document.getElementById("click")
function btnclick(){
    alert("button click")
}
btn.addEventListener("click",btnclick,true)
var div=document.getElementById('outer')
div.addEventListener('click',function(){
    alert("div capturing")
})
div.addEventListener('click',function(){
    alert('div bubbling phase')
})
//event delegation
//each and every element ku event add cheyakunda top-most element vuntundho a event ki add chestha
//remain appudu child ki apply avuthundhi
div2.addEventListener('click',function(){
    alert("event attached to div")
})
//direct i can add to top most parent ki adding 
var tab=document.getElementById("table")
tab.addEventListener("click",function(){
    alert("table clicked")
})
//getting orederlist
var ol=document.getElementById("ollist")
ol.addEventListener("cilck",function(){
    alert("you clicked the list")
})
