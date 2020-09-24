import { decimalToRoman } from "./convertDecimalToRoman.js";
import { romanToDecimal } from "./convertRomanToDecimal.js";

const romanInput = document.getElementById("roman");
const decimalInput = document.getElementById("decimal");

romanInput.addEventListener("keyup", function(event) {
    const [total, text] = romanToDecimal(event.target.value)

    decimalInput.value = total;
    romanInput.value = text;
});

decimalInput.addEventListener("keyup", function(event) {
    let value = event.target.value
    
    if(value < 1) return;
    if(value > 3999) value = 3999;

    const text = decimalToRoman(value)

    romanInput.value = text;
    decimalInput.value = value;
});