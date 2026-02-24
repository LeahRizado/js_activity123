const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumVal = document.getElementById("sum");
const diffVal = document.getElementById("diff");
const prodVal = document.getElementById("prod");
const quoVal = document.getElementById("quo");

function calculate() {
    if (!(num1Txt.value === "" || num2Txt.value === "")) {
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        sumVal.innerHTML = sum;
        diff = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        diffVal.innerHTML = diff;
        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        prodVal.innerHTML = prod;
        quo = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        quoVal.innerHTML = quo;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";
    sumVal.innerHTML = "";
    diffVal.innerHTML = "";
    prodVal.innerHTML = "";
    quoVal.innerHTML = "";
}