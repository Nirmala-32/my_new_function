var apidata
fetch('https://jsonplaceholder.typicode.com/posts')
//.then(data=>console.log(data))
//.then(d=>d.json())
.then(data=>console.log(data))
function hello(a,b){
    return function bye(){
        return a+b
    }
}
//console.log(hello(1,2))
//console.log(hello(1,2)())
var k=hello(1,2)
console.log(k)
console.log(k())

//iife
let o1=(()=>{
    let m="hai"
    let n="hello"
    console.log(m,n)
})()
function A(a,b){
    return function B(){
       return a+b 
    }
}
var p=A(1,2)
console.log(p())
//function currying 
function A(a){
    return function B(b){
        return function C(c){
            return function D(d){
                return a+b+c+d
            }
        }
    }
}
console.log(A(1)(2)(3)(4))
//recursive function
function prod(a){
    if(a===0){
        return 1
    }
    return a*prod(a-1)

}
console.log(prod(5))
//function recursive sum
function sum(a){
    if(a===0){
        return 1
    }
    return a+sum(a-1)

}
console.log(sum(2))
//hiher order function
var a=function hello(){
    return "this is hello function"
}
function hai(m){
    console.log( "this is hai function")
    return m()
    
}
console.log(hai(a))
//callback
function one(){
    console.log("this is first function")
}
function two(a){
    console.log("this is second function")
    a()
}
two(one)
//remove duplicates from an array
arr=[1,2,3,4,5,6,7,6,5,4,3]
function find(arr){
    newarr=[]
    for(i of arr){
        if(!newarr.includes(i)){
            newarr.push(i)
        }

    }
    return newarr

}
console.log(find(arr))