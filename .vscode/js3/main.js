const numsVal = document.getElementById("nums");
const sumVal = document.getElementById("sum");

let arr = [];
let sum = 0;

function pushArr() {
    
    arr.push(numsVal.value);
}

for(let i=0; i<arr.length; i++ ) {
    sum += arr[i];
}
 
//numsVal.innerHTML = arr.join("<br>");
//sumVal.innerHTML = sum;
console.log(arr);