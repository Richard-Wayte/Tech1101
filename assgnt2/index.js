//Declaring my variables
let gross = document.querySelector("#gross");
const run = document.querySelector("#run");
const clear = document.querySelector("#clear");
const owed = document.querySelector("#owed");
const taxRate = document.querySelector("#taxRate");
const ret = document.querySelector("#retained");
const error = document.querySelector("#errorCode")

//The function that makes is all work
function runFn() {
    if(gross.value <= 48535 && gross.value > 0) {
        brac1(gross.value);
    }

        else if(gross.value > 48535 && gross.value <= 97069) {
            brac2(gross.value);
        }

        else if(gross.value > 97069 && gross.value <= 150473) {
            brac3(gross.value);
        }

        else if(gross.value > 150473 && gross.value <= 214368) {
            brac4(gross.value);
        }

        else if(gross.value > 214368) {
            brac5(gross.value);
        }

        else {
            error.value = "ERROR: Invalid input";
            gross.value = null;
            owed.value = '';
            taxRate.value = '';
            ret.value = '';
        }
}

//Functions for each tax bracket
function brac1(calc) {
    owed.value = calc * 0.15;
    ret.value = calc * 0.85;
    taxRate.value = "15%";

    owed.value = Math.round(owed.value*100)/100;
    ret.value = Math.round(ret.value*100)/100;
}

function brac2(calc) {
    owed.value = 7280.25 + ((calc - 48535) * 0.205);
    ret.value = 41254.75 + ((calc - 48535) * 0.795);
    taxRate.value = ((owed.value / ret.value) * 100);
    
    owed.value = Math.round(owed.value*100)/100;
    ret.value = Math.round(ret.value*100)/100;
    taxRate.value = (Math.round(taxRate.value*100)/100) + '%';
}

function brac3(calc) {
    owed.value = 17229.72 + ((calc - 97069) * 0.26);
    ret.value = 79518.96 + ((calc - 97069) * 0.74);
    taxRate.value = ((owed.value / ret.value) * 100);

    owed.value = Math.round(owed.value*100)/100;
    ret.value = Math.round(ret.value*100)/100;
    taxRate.value = (Math.round(taxRate.value*100)/100) + '%';
}

function brac4(calc) {
    owed.value = 31114.76 + ((calc - 150473) * 0.29);
    ret.value = 119358.24 + ((calc - 150473) * 0.71);
    taxRate.value = ((owed.value / ret.value) * 100);

    owed.value = Math.round(owed.value*100)/100;
    ret.value = Math.round(ret.value*100)/100;
    taxRate.value = (Math.round(taxRate.value*100)/100) + '%';
}

function brac5(calc) {
    owed.value = 49644.31 + ((calc - 214368) * 0.33);
    ret.value = 164723.69 + ((calc - 214368) * 0.77);
    taxRate.value = ((owed.value / ret.value) * 100);

    owed.value = Math.round(owed.value*100)/100;
    ret.value = Math.round(ret.value*100)/100;
    taxRate.value = (Math.round(taxRate.value*100)/100) + '%';
}

//Clear function
function clearFn() {
    gross.value = null;
    owed.value = '';
    taxRate.value = '';
    ret.value = '';
    error.value = '';
}

//The buttons.
run.addEventListener("click", runFn);
clear.addEventListener("click", clearFn);

