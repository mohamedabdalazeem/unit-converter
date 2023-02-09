const inputEL = document.getElementById('input-el');
const convertBtn = document.getElementById('convert-btn');
const lengthPara = document.getElementById('length-para');
const volumePara = document.getElementById('volume-para');
const massPara = document.getElementById('mass-para');
const alertPara = document.getElementById('alert-para');

alertPara.style.display = 'none';

let feetUnit;
let meterUnit;
let literUnit;
let gallonUnit;
let kiloUnit;
let poundUnit;
let unit;
convertBtn.addEventListener('click',convertUnits)

function convertUnits(){
unit = inputEL.value;
unit = Number(unit);
if(isNaN(unit)){
    alertPara.style.display = 'block';
}else {
    alertPara.style.display = 'none';
    meterUnit = (unit / 3.281).toFixed(3);
    feetUnit = (unit * 3.281).toFixed(3);
    literUnit = (unit / 0.264).toFixed(3);
    gallonUnit = (unit * 0.264).toFixed(3);
    kiloUnit = (unit / 2.204).toFixed(3);
    poundUnit = (unit * 2.204).toFixed(3);
    renderUnits()
}
}

function renderUnits(){
    lengthPara.textContent = `${unit} meters = ${feetUnit} feet | ${unit} feet = ${meterUnit} meters`;
    volumePara.textContent = `${unit} liters = ${gallonUnit} gallons | ${unit} gallons = ${literUnit} liters`;
    massPara.textContent = `${unit} kilos = ${poundUnit} pounds | ${unit} pounds = ${kiloUnit} kilos`;
}


// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
//20 meters = 65.616 feet | 20 feet = 6.096 meters
//20 liters = 5.284 gallons | 20 gallons = 75.708 liters
//20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos