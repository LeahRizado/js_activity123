const inputData = document.getElementById("input")
const elementTxt = document.getElementById("elements");
const sumTxt = document.getElementById("sum");
const highestTxt = document.getElementById("highest");
const lowestTxt = document.getElementById("lowest");

let arr = [];
let sum = 0;

function pushToArr() {
    if (!(inputData.value === "")) {
        arr.push(parseInt(inputData.value));
        inputData.value = "";

        sum = 0;
        for(let i=0; i<arr.length; i++ ) {
            sum += arr[i];
        }
    }

    elementTxt.innerHTML = arr.join("<br>");
    sumTxt.innerHTML = sum;
    
    if (arr.length > 0) {
        highestTxt.innerHTML = Math.max(...arr);
        lowestTxt.innerHTML = Math.min(...arr);
    }
    
    console.log(arr);
}

function clearEntries() {
    inputData.value = "";
    elementTxt.innerHTML = "";
    sumTxt.innerHTML = "";
    highestTxt.innerHTML = "";
    lowestTxt.innerHTML = "";
    arr = [];
    sum = 0;
}