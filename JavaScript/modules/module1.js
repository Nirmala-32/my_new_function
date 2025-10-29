//in 2 ways we can export 
//named export
//default export

// export function signUp(){
//     console.log("signup")  //named exports in file we can have any number of named exports
//                            //no limit
// }
// export default function signUp(){
//     console.log("signup")        //default export it will be only one in the file
// }
export default function add(a,b){
    console.log(a,b)
    return a+b
}