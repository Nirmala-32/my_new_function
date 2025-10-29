 let weakSet=new WeakSet();

 var obj1={name:"nirmala"}
 var obj2={name:"reshwanth"}
 //adding objects in weakset by using weakset.add()
 weakSet.add(obj1);
 weakSet.add(obj2)
 //console.log(m)
 weakSet.delete(obj1)
 obj2=null
 console.log(weakSet.has(obj1))
 console.log(weakSet.has(obj2))

 