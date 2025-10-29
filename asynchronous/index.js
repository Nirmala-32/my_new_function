function one(nextfunction){
console.log("one function")
//console.log(nextfunction)
window.setTimeout(()=>{
nextfunction()
},2000)

}
function two(nextfunction){
console.log("second function")
window.setTimeout(()=>{
nextfunction()
},3000)
}
function three(hai){
console.log("third function")
window.setTimeout(()=>{
hai()
},4000)
}
function four(){
console.log("fourth function")
}
//one(two)
//  one(()=>{
//     two(()=>{
//        three(()=>{
//            four()})})})
            var dat=fetch('')
            //console.log(dat)
            function fetchdata(hello){
                var data="Reshwanth"
                window.setTimeout(()=>{
                  hello(data)
                },5000)
                }

            function displaydata(name){
                console.log("data from api calls",name)
            }
            //fetchdata(displaydata)
            //promises
            var pro=new Promise((resolve,reject)=>{
                //console.log(resolve)
                //console.log(reject)
                })
            console.log(pro)
        var a=Promise.resolve('Hello')   
        a.then((value)=>{console.log(value)}) 
        .catch((value)=>{console.log(value)})

//Promise all
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
])
.then(result=>{console.log(result)})
.catch(error=>{console.log(error)})
Promise.race([
    new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            resolve(1)
        },1000)
    }),
    new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            reject(2)

        },200)
    })
])
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})
//promise.any
Promise.any([
    new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            resolve(1)
        },1000)
    }),
    new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            reject(2)
        },200)
    })
])
.then((data)=>{console.log(data)})
Promise.allSettled([
    new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            resolve(1)
        },1000)
    }),
    new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            reject(2)
        },200)
    })
])
.then((data)=>{console.log(data)})
//promise
var pro=new Promise((resolve,reject)=>{
    resolve()
})
pro.then(function(data){
    console.log("promise resolved")
})
.catch(function(error){
    console.log("promise rejected")
})
//promise
var pro1=new Promise((resolve,reject)=>{})
console.log(pro1)
function First(){
   return new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            console.log("First function")
            resolve()
        },1000)
    })

}
function Two(){
  return  new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            console.log("second function")
            resolve()
        },2000)
    })

}
function Three(){
    return new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            console.log("Third function")
        },4000)
    })

}
First()
.then(Two())
.then(Three())
.catch(()=>{
    console.log("promise rejected")
})
async function hello(){
    await First()
    await Two()
    await Three()
}
hello()
document.write("hello")//it will print on webpage
//alert
alert("how are you")//it displays alert message
//prompt
var a=prompt("enter your name")//to collect input from the user
console.log(a)
//confirm
var b=confirm("are you sure?")
console.log(b)