var arr1=[1,2,3,4,5]
console.log(arr1)
console.log(arr1.length)

var arr1=[1,2,3,4,5,"hello","hai",true,null,undefined,{},[[[]],[]],"good afternoon"]
console.log(arr1)
//how to acess individual item in array
// by using index values and [] operator
console.log(arr1)
console.log(arr1[5])
console.log([arr1.length-1])
console.log(arr1[arr1.length-1])
//adding new item at the end of array by using push()
console.log(arr1)
arr1.push("bye")
console.log(arr1)
console.log(arr1[arr1.length-1])
//adding new item at the beginning of array by using unshift()
//unshift()
arr1.unshift("hi")
console.log(arr1)
console.log(arr1[0])
//we can add anywhere in the array by using splice()
//splice() arrayname.method(start index,no of items to be deleted,items to be added)
//arr1.splice(3,0,"how are you?")
//console.log(arr1)
//console.log(arr1.length)
arr1.splice(3,1,"how are you?")
console.log(arr1)
arr1.push("bye")
//i want to add one item at the end without using push ()method
//we use splice() splice means we can add anywhere in the array
arr1.splice(arr1.length,0,"morning")
console.log(arr1)
console.log(arr1[arr1.length-1])
console.log(arr1.length-1)
//removing last item in the array by using pop() method
arr1.pop()
console.log(arr1)      //here morning removed
arr1.pop()
console.log(arr1)      //here bye removed
//removing first item in the array by using shift() method
arr1.shift()
console.log(arr1)    //here hi removed
//removing any item in the array by using splice() method
arr1.splice(4,1)
console.log(arr1)  //here after index of 4 one item is removed
//removing all the items in the array by using splice() method
arr1.splice(0,arr1.length)
console.log(arr1)  //here all the items are removed

//assigning zero to the length of the array
arr1.length=0
console.log(arr1.length)
console.log(arr1)   //here all items ARE removed

//assigning an empty array  to the original array
arr1=[]
console.log(arr1.length)  //here length is 0
console.log('array length is:+arr1.length')
console.log(arr1)  //here empty array will be printed
// //normal waY OF Declaring array
// var car1="audi"
// var car2="bmw"
// var car3="hyundai"
// console.log(car1,car2,car3)

// //array way of declaring array
// var cars=["audi","bmw","hyundai"]
// console.log(cars[0],cars[1],cars[2])

// //giving empty array to the variable and then assigning values to it
// //by using index values
// var cars=[]
// cars[0]="audi",
// cars[1]="bmw",
// cars[2]="hyundai";
// console.log(cars[0],cars[1],cars[2])
// //creatsan array by using new keyword
// var cars=new Array("audi","bmw","hyundai")
// console.log(cars)