// // //in primitive types,the value is copied to the new variable
// // //so if we change the value of the new variable,then the old variable will not be affected

// // //1.primitives
// // var m=20
// // var n=m
// // console.log(m,n) //20 20
// // m=30//updating the value of m to 30,in m we get 30
// // //but in n we get 20 because n is a copy of m
// // //so if we change the value of m,then n will not be affcted
// // console.log(m,n) //30 20  both m and n memory locations are different
// // n=m
// // console.log(m,n) //30 30 primitive will perform deep copy
// // //Deep copy means copying the value of the variable to the new variable
// // //original memory location is different from copied memmory location
// // //in primitive we copied values by using "assignment operator".(deep copy)

// // //2.Reference types
// // //in reference types,the reference is copied to the new variable
// // //but in refernce types,if we change the value of the new variable,then the old variable will be affected
// //   //a.Normal copy
// //   //b.Shallow copy
// //   //c.Deep copy
// // //1.1.Normal copy
// // //in normal copy,if we change the value of the new variable then the old variable will be effected
// //   var original={
// //     name:"nirmala",
// //     age:26,
// //     job:"developer"
// //   }
// // //console.log(original)
// // //now i will create a new variable and assign the value of original to it
// // var copy=original //copy is a refernce of original
// // console.log(copy)   //nirmala 26 developer
// // console.log(original) //nirmala 26 developer
// // //now if i change the value of copy,then the original will also be changed
// // copy.name="reshwanth"
// // console.log(copy)      //reshwanth 26 developer
// // console.log(original)  //reshwanth 26 developer
// // original.age=40 //now i change the value of original to 40 copy will also be changed to 40
// // console.log(copy) //reshwanth  40 developer
// // console.log(original) //reshwanth 40 developer
// // //so in normal copy,if we change the value of the new variable then the old variable will be affected

// //1.2 now second use case in normal copy in reference types
// var original={
//     name:"nirmala",
//     age:26,
//     city:"hyd",
//     job:{    //now i am taking job as an object
//         role:"developer",
//         salary:90000

//     }
// }
// //now i will create a new variable(copy)and assiagn the value of original to it
// var copy=original //copy is a reference of original
// console.log(original) 
// //updating the value of salary in job object in original object
// original.job.salary=99000
//  original.age=31
//   console.log(original)//here updating both objects whcih is present original and job
//keys are updating in nested objects it will reflect in both objects
// console.log(copy)
// copy.name="suvi"
//  copy.salary=120000
//  console.log(original)
// console.log(copy)

//in reference if we use assignment operator it will become normal copy
//1.3 Deep copy in reference we perform by using JSON.parse(JSON.Stringfy(objectreference))
// var original={
//         name:"nirmala",
//         age:26,
//         city:"hyd",
//         arr:[1,2,4,5],
//         job:{    //now i am taking job as an object
//            role:"developer",
//            dept:"IT",
//             salary:90000,
//             // arr:[1,2,4,5]
//         }
//     } //now i am updating name in original and age in copy obj 
    // 1.4var copy=JSON.parse(JSON.stringify(original))
    // original.name="reshwanth"
    // copy.age=35
    // console.log(original)
    // console.log(copy) 
    //in DEEP copy in reference if i change in original object its not affecting to copy object
    // var copy=JSON.parse(JSON.stringify(original))
    // //now i will update array in original object
    // original.name="kiran"
    // original.arr[0]=10
    // copy.age=56
    // console.log(original) //in original its changing values but in copy not effecting that values
    // console.log(copy)

    //1.5 loadsh library

    
    // var original={
    //     name:"nirmala",
    //     age:26,
    //     city:"hyd",
    //     arr:[1,2,4,5],
    //     play:function(){
    //         console.log("hai how are you")
    //     },
    //     job:{    //now i am taking job as an object
    //        role:"developer",
    //        dept:"IT",
    //         salary:90000,
    //     }
            
    //     }
    
    // var copy=lodash.cloneDeep(original)
    // original.age=70
    // copy.job.salary=500000
    // console.log(original)
    // console.log(copy)

    //1,5 shallow copy in reference type
    var original={
        name:"nirmala",
        age:26,
        city:"hyd",
        arr:[1,2,4,5],
        play:function(){
            console.log("hai how are you")
        },
        job:{    //now i am taking job as an object
           role:"developer",
           dept:"IT",
            salary:90000,
        }
            
        }//SHALLOW COPY ES5---->syntax
    //     var copy=Object.assign({},original)
    //     //now i will update in original
    //     original.age=80
    //     original.arr[0]=20
    //     copy.job.salary=7777777
    // console.log(original)
    // console.log(copy)
    //shallow copy when we updating age in original  and its not effecting to copy in these primitive data types 
    //shallow copy when we updating in array and object its effecting to copy obj also.
    //shallow------>PDT----->Deep copy--->not changing
    //shallow------->RDT----->normal copy---->changing

    //1.6 ES6----syntax[spread operator]
    var copy={
        ...original
    }
    original.age=45
    original.arr[0]=77
    copy.job.salary=8888888
    console.log(original)
    console.log(copy)
    //shallow copy when we updating age in original  and its not effecting to copy in these primitive data types 
    //shallow copy when we updating in array and object its effecting to copy obj also.
    //shallow------>PDT----->Deep copy--->not changing
    //shallow------->RDT----->normal copy---->changing
