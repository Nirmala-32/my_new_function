var obj={
    name:"ravi",
    age:30,
    city:"hyd",
//     play:function(){        //METHOD it refer to current object in normal function
//         console.log(this)
//     }
play:()=>{
    console.log(this)     //if we  use arrow function doesnot have own this,
                                // it will check parental scope
}
}
console.log(obj)
obj.play() //here i am checking this in play function
//if we check this in global object it refers to window object
//console.log(this)
