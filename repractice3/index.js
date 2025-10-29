// // localStorage.setItem('name','Reshwanth')
// // sessionStorage.setItem('name','nirmala')
// // sessionStorage.setItem('name','prasanth')
// // localStorage.setItem('age','30')
// function isArmstrong(number) {
//     const digits = number.toString().split('');
//     const order = digits.length;
//     const sum = digits.reduce(
//         (acc, digit) =>
//             acc + Math.pow(parseInt(digit), order), 0);

//     if (sum === number) {
//         console.log(
//             number + " is an Armstrong Number");
//     }
//     else {
//         console.log
//             (number + " is not an Armstrong Number");
//     }
// }

// isArmstrong(9474);
// isArmstrong(520);
// //palindrome
// function palindromeCheck(number) {
//     if (number < 0) {
//         return false;
//     }
//     let original = number;
//     let reversed = 0;

//     for (let temp = original; temp > 0;
//         temp = Math.floor(temp / 10)) {
//         reversed = reversed * 10 + temp % 10;
//     }

//     return number === reversed;
// }

// console.log(palindromeCheck(121));
// console.log(palindromeCheck(12321));
// console.log(palindromeCheck(12345));<ol>
        
var arr=[1,2,3,4,11,101,200,247,4240,8,90,5,6]
function sortArray(m){
for(var i=0;i<m.length;i++){
    //assuem current index is minimum
    let minIndex=i;
    //compare with the rest of the elements
    for(j=i+1;j<m.length;j++){
        if(m[j]<m[minIndex]){
            minIndex=j
        }
    }
    //swap the elements
    let temp=m[i]
    m[i]=m[minIndex]
    m[minIndex]=temp
    }
    return m
}
//let sortedArray=sortArray(numbers)
console.log(sortArray(arr))