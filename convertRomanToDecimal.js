import { decimalToRoman } from "./convertDecimalToRoman.js";

export function romanToDecimal(roman) {
    let text = avoidBasicTypingMistakes(roman).toUpperCase();

    console.log(text)
    let total = 0

    text.split('').map((symbol, index, array) => {
        const value = getDecimalNumber(symbol);
        const previousValue = getDecimalNumber(array[index - 1]);

        if(index === 0) {
            total += value
            return;
        }

        if(previousValue < value) {
            total += value - (previousValue * 2)
            return;
        }

        total += value
    })

    try {
        text = decimalToRoman(total)
    } catch (err) {
        text = ''
    }

    return [total, text]
};

function getDecimalNumber(roman) {    
    const placeSymbols = ['I', 'X', 'C', 'M', ''];
    const halfPlaceSymbols = ['V', 'L', 'D', ''];
    const placeSymbolsF = [1, 10, 100, 1000, 0]
    const halfPlaceSymbolsF = [5, 50, 500, 0];

    const posPlaceSymbol = placeSymbols.indexOf(roman);
    const posHalfPlaceSymbol = halfPlaceSymbols.indexOf(roman);

    if(posPlaceSymbol >= 0) {
        return placeSymbolsF[posPlaceSymbol];
    } else {
        return halfPlaceSymbolsF[posHalfPlaceSymbol];
    }
}

function avoidBasicTypingMistakes(value) {
    const invalidRoman = /[^ivxlcdm]/gi

    const invalidIRoman = /(i){4,}/gi
    const invalidXRoman = /(x){4,}/gi
    const invalidCRoman = /(c){4,}/gi
    const invalidMRoman = /(m){4,}/gi

    const invalidVRoman = /(v)+/gi
    const invalidLRoman = /(l)+/gi
    const invalidDRoman = /(d)+/gi

    let text = String(value.replace(invalidRoman, ""));
    text = text.replace(invalidIRoman, "III");
    text = text.replace(invalidXRoman, "XXX");
    text = text.replace(invalidCRoman, "CCC");
    text = text.replace(invalidMRoman, "MMM");

    text = text.replace(invalidVRoman, "V");
    text = text.replace(invalidLRoman, "L");
    text = text.replace(invalidDRoman, "D");

    return text;
}
