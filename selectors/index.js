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