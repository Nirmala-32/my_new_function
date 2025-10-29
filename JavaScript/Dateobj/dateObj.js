 //now we calling date object then we are using new keyword to create the object
//  var d=new Date()
//  console.log(d)   //it will give the current date and time
//  //we use . operator to access of methods of math object
//  //like we will use . operator to access the methods of date object
//  var d=new Date().getTime()
//  console.log(d)  //it will give the time in milliseconds 
//  var d=new Date().getFullYear()
//  console.log(d)  //it will give the current year
//  var d=new Date().getMonth()
//  console.log(d)  //it will give the current month(0-11 month starts from 0)
//  var d=new Date().getDay()
//  console.log(d) //it will give the current day(0-6 day starts from 0)

//  var d=new Date()
//  d.setFullYear(2022)
//  d.setFullYear(2022,10,22)
//  console.log(d) //it will set the year to 2022 and month to 11 and date to 22

 //Template Strings
 //we can use template strings to create multi line strings and 
 //we can use ${} to access the variable in the string
 //we can use backticks to create template strings
 var a=3
 var b=4
 console.log(a+b) 
 console.log("sum of a and b",a+b)
 console.log("sumof a"+a+" and b"+b+" is:",a+b)
 //using template strings embedding values in the string
 console.log(`sum of ${a} and ${b}is:${a+b}`)