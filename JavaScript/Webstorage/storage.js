// console.log(this)
// console.log(window)
//l.s keys:setting key-value pair
localStorage.setItem('name','nirmala')
localStorage.setItem('company','NYB1')
localStorage.setItem('age','30')
localStorage.setItem('dept','HR')
console.log(localStorage.length)
//replace the name
//localStorage.setItem('name','prasanth')
//session storage
sessionStorage.setItem('name','reshwanth')
sessionStorage.setItem('company',"NYB")
sessionStorage.setItem('dept','IT')
sessionStorage.setItem('age',"2")
console.log(sessionStorage.length)
//sessionreplace the item
sessionStorage.setItem('age','2.5')
//getting key at specific index
var keyName=localStorage.key(0)
console.log(keyName)


//getitem
console.log(sessionStorage.getItem('company'))
//console.log(localStorage.getItem('company'))
//remove item
localStorage.removeItem('company')
//after emoving if we access we get null
console.log(localStorage.getItem('company'))
//clearall
//sessionStorage.clear()
//localStorage.clear()
localStorage.key
