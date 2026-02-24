const fNameTxt = document.getElementById("fName");
const mNameTxt = document.getElementById("mName");
const lNameTxt = document.getElementById("lName");
const fullName = document.getElementById("fullN");

function generate() {
    if (!(fNameTxt.value === "" || mNameTxt.value === "" || lNameTxt.value === "")) {
        fullN = fNameTxt.value + " " + mNameTxt.value + " " + lNameTxt.value;
        fullName.innerHTML = fullN;
    }
}

function clearEntries() {
    fNameTxt.value = "";
    mNameTxt.value = "";
    lNameTxt.value = "";
    fullName.innerHTML = "";
}