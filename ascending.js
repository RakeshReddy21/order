// // [12.345, 67.890, 34.567], // Round each element to 2 decimal places using toFixed()
// // ['123abc', '456def', '789ghi'], // Convert each element to an integer using parseInt()
// // [12, 34.56, 78, 90.12], // Check if each element is an integer using isInteger()
// // ['abc', 123, 'def', 456], // Check if each element is NaN (Not a Number) using isNaN()
// // [123.456, 789.012, 345.678] // Format each element to have a precision of 4 significant digits using toPrecision()
// // generate random otp 5 digit num using math.random

// arr= [12.345, 67.890, 34.567]
// console.log("Round each element to 2 decimal places using toFixed()")
// console.log(arr.map(x=>x.toFixed(2)))


// arr=['123abc', '456def', '789ghi']
// console.log("Convert each element to an integer using parseInt()")
// console.log(arr.map(x=>parseInt(x)))

// arr = [12, 34.56, 78, 90.12]
// console.log("Check if each element is an integer using isInteger()")
// console.log(arr.map(x=>Number.isInteger(x)))

// arr=['abc', 123, 'def', 456]
// console.log("Check if each element is NaN (Not a Number) using isNaN()")
// console.log(arr.map(a=>isNaN(a)))

// arr=[123.456, 789.012, 345.678]
// console.log("Format each element to have a precision of 4 significant digits using toPrecision()")
// console.log(arr.map(x=>x.toPrecision(4)))

// x=Math.random()*100000
// console.log("generate random otp 5 digit num using math.random")
// console.log(Math.round(x))


arr = [ 538, 111, 200, 652]
res=[]
for(i of arr){
    istr = String(i)
    c=0
    for(j=0;j<istr.length-1;j++){
        if(istr[j+1]<istr[j]){
            c++
        }
    }
    res.push(istr.length-1 ==c)
}
console.log(res)


arr=[23, 33, 200, 785]
unq="";
dup="";
for (i of arr){
    istr = String(i).split("").map(Number)
    emp=[]
    for (j of istr){
        if(!emp.includes(j)){
            emp.push(j)
        }
    }
    for(x of emp){
        c=0;
        for(z of istr){
            if(x==z){
                c++;
            }
        }
        if(c==1){
            unq=unq+x+" "
        }
        else{
            dup=dup+x+""
        }
    }
}
console.log(dup) 



let input = "112";
let uniques = [];
let duplicates = [];

for (let i = 0; i < input.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniques.length; j++) {
        if (uniques[j] === input[i]) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate) {
        let x = false;
        for (let k = 0; k < duplicates.length; k++) {
            if (duplicates[k] === input[i]) {
                x = true;
                break;
            }
        }
        if (!x) {
            duplicates.push(input[i]);
        }
    } else {
        uniques.push(input[i]);
    }
}
console.log("Uniques:", uniques.join(''));
console.log("Duplicates:", duplicates.join(''));