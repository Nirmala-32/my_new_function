// // // // //  //string objects:collections of characters
// // // // //  //strings can be considered as a objects in javascript
// // // // //  //strings are immutable in javascript
// // // // //  //strings are immutable means we cannot change the value of string once it is created
// // // // //  //we can create string using string constructor or string literal.
// // // // //  //string methods
// // // // //  //1.string length
// // // // //  //how to find the length of the string
// // // // //  //we can find the length of the string by using length property
// // // // //  //1.1syntax:stringname.length
// // // // //  var a="hello world"
// // // // //  console.log(a.length) //it will give the length ofthe string
// // // // //  //remove white spaces from the string by using trim() method
// // // // //  //it will remove the white spaces from the beginning and endof the string
// // // // //  //it will not remove the white spaces from the middle of the string
// // // // //  //1.2syntax:stringname.trim()
// // // // //  var a="     hello world   "
// // // // //  console.log(a)  //it will give the string with white spaces
// // // // //  //Remove the white spaces from at the beginning of the string
// // // // //  //1.3syntax:stringname.trimstart()
// // // // //  console.log(a.trimStart()) //it will give the string without white spaces at the beginning of the string
// // // // //  console.log(a.trimEnd()) 
// // // // //  console.log(a.trim())

// // // // //  //1.4Exacting specific part of the string
// // // // //  var a="hello good morning"
// // // // //  //i dont want whole string i want only specific part then we use slice()
// // // // //  //1.5syntax:slice(starting index,ending index)
// // // // //  //if we want anypart u have to give extra index to that method
// // // // //  console.log(a)
// // // // //  console.log(a.slice(0,4))
// // // // //  console.log(a.slice(0,5))
// // // // //  console.log(a.slice(11,a.length)) //morning
// // // // //  //L_R=====+ve values
// // // // //  //R_L=====-ve values
// // // // //  console.log(a.slice(11,-1))//mornin
// // // // //  console.log(a.slice(11,-2)) //morni
// // // // // console.log(a.slice(0,-1)) //it will remove last letter and print

// // // // // //1.6 Substring
// // // // // //Substring doesnot take negative values and it will extract the specific part of the string
// // // // // console.log(a.substring(0,5))
// // // // // console.log(a.substring(0,a.length))
// // // // // //1.7 Substr how many characters do we need
// // // // // console.log(a.substr(6,3))
// // // // var a="Good Morning"
// // // // console.log(a.substr(1,1))
// // // // console.log(a.substring(1,2))
// // // // //1.8 in string we have to check which character is present at which index
// // // // //indexof it performs [case sensitive] and if any letter is occuring repeatedly it will
// // // // //take first occurence .if u want only last occurence we use lastindexof
// // // // console.log(a.indexOf('g'))
// // // // //if we use indexof it will get index value
// // // // console.log(a.indexOf('o'))
// // // // //i want last'o' for that we use last index of
// // // // console.log(a.lastIndexOf('o'))
// // // // //1.9 if i give index value it has to fetch that particular value that purpose we use charAt
// // // // //syntax:stringname.charAt(indexvalue)
// // // var d="good morning"
// // // console.log(d.charAt(1))  //o
// // // console.log(d.charAt(7)) //r
// // // //2.0 charCodeAt()  //ASCII Values
// // // console.log(d.charCodeAt(1))
// // // console.log(d.charCodeAt('a'))
// // // //2.1 to upper case r to lower case
// // // console.log(d.toUpperCase())
// // // console.log(d.toLowerCase())
// // // //2.1 Replace
// // var a="hello World"
// // console.log(a)
// // //i want to replace world with javascript
// // console.log(a.replace("world","javascript"))

// // //2.2 concatination
// // //adding a new string [+] it is useful in mathematical operations but now 
// // //it is used to concat the 2 strings
// // var a="hello"
// // var b="friends"
// // console.log(a+b)
// // console.log(b+a)
// // console.log(a.concat(b))
// // console.log(b.concat(a))//if any word we taken it will add at last for that using concat
// // console.log(b.concat("how are you?"))
// // //if i want to add the word at starting we use pad start,pad end
// // console.log(a.padStart(b))

// // //2.3 split() it will change string like a array
// var a="apple,cherry,banana"
// console.log(a)
// //i want to change above string as a array we use split method
// console.log(a.split(","))
// //or it can store into one variable
// var s=a.split(",")
// console.log(s)
// //2.4 how to find existing string
// var a="apple banana orange banana banana banana  banana"
// console.log(a.indexOf('b'))
// console.log(a.lastIndexOf('b'))
// console.log(a.startsWith("banana"))
// console.log(a.startsWith("apple"))
// console.log(a.endsWith('apple'))
// console.log(a.endsWith("banana"))

// //2.5 Repeat it will execute same word repeatedly
// var a="hi"
// console.log(a.repeat(1))
// console.log(a.repeat(3))
// var z=" "
// console.log(z) // if we wont give anything it will give undefined
// //if we give empty string it give empty string here
// for(i=0;i<3;i++){
//     z+=a
//     console.log(z)  //1.hi 2.hihi 3.hihihi
// }
// console.log(z) //hihihi

// //Garbage collector
//memory allocation and deallocation [Mark and Sweep algorithm]
var a={
    name:"ravi",
    age:30,
    city:"hyd"
}
var b=a
//a=null //in object place we are storing null it will deallocate memory
//console.log(b.name) //ravi
console.log(b.salary) //undefined
console.log(a.name)
console.log(b.age)
console.log(b.name)





