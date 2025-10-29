// // console.dir(document)
// // console.log(document.childNodes)
// // console.dir(document.childNodes[1])
// // console.dir(document.childNodes[1].childNodes[2].childNodes[1].innerText="hi reshwanth")
// // //selectors
// // //getElementById
// // //getElementsByClassName
// // //getElementByTagName
// // //querySelector
// // //querySelectorAll
// // document.getElementById('heading1').style.color='red'
// // var a=document.getElementById('heading1')
// // console.dir(a)
// // a.innerText="good evening"
// // document.getElementById('heading1').style.backgroundColor='purple'
// // a.style.backgroundColor="pink"
// // //classname
// // var b=document.getElementsByClassName('one')
// // //console.log(b)
// // //b[2].innerText="good night"
// // console.log(b)
// // var c=document.getElementsByTagName('h4')
// // console.log(c)
// // var d=document.querySelector('#two')
// // console.log(d)
// // var e=document.querySelectorAll('#one')
// // console.log(e)
// // //dom traversing
// // var div2=document.getElementById('div2')
// // console.log(div2)
// // var parent=div2.parentElement
// // console.log(parent)
// // parent.style.backgroundColor='orange'
// // var children=div2.children
// // console.log(children)
// // var firstelem=div2.firstElementChild
// // console.log(firstelem)
// // var lastelem=div2.lastElementChild
// // console.log(lastelem)
// // var presibiling=div2.previousElementSibling
// // console.log(presibiling)
// // var nextsibiling=div2.nextElementSibling
// // console.log(nextsibiling)
// // //creating new element
// // var newelement=document.createElement('h1')
// // newelement.textContent='this is a new element'
// // newelement.setAttribute('id','newelement')
// // newelement.setAttribute('class','newelement')
// // div2.appendChild(newelement)
// // console.log(newelement)
// // //addevenet lstener
// // // div2.addEventListener("click",function(){
// // //     alert("this is a alert meassage")
// // // })
// // function clickEvent(){
// //     alert("this is a alert measage")
// // }
// // div2.addEventListener("click",clickEvent,false)

// // var btn=document.getElementById('click')
// // btn.addEventListener("click",function btnclick(){
// //     alert("btn clicked")
// // },false)
// // var div=document.getElementById('outer')
// // div.addEventListener("click",function (){
// //     alert('div capturing')
// // })
// // div.addEventListener("click",function(){
// //     alert('div bubbling')
// // })
// // var tab=document.getElementById('table')
// // console.log(tab)
// // tab.addEventListener('click',function(){
// //     alert('table clicked')
// // })
// //console.log("hello")
// setTimeout(()=>{
//     //console.log("hello")
// },1000)
// function dely(a,b){
//     console.log(a+b)
//     console.log("hello this is a  timer function which will execute after 1 sec")
// }
// console.log('this is sample statemnet')
// let settimeout=setTimeout(dely,2000,1,2)
// clearTimeout(settimeout)
// console.log('this is sample statement2')
// let interval=setInterval(dely,2000)
// setTimeout(()=>{
// clearInterval(interval)
// },4000)
localStorage.setItem('name','varaprasad')
localStorage.setItem('company','nyb')
console.log(localStorage.getItem('company'))
localStorage.removeItem('name')
console.log(localStorage.getItem('name'))
localStorage.setItem('company','NYB')
