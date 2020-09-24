export function decimalToRoman(number) {
    if(number < 1 || number > 3999) {
        throw new RangeError('number out of the range')
    }

    const numStr = number.toString()

    return numStr
        .split('')
        .map((value, index) => getRoman(
            numStr.length - index - 1, 
            parseInt(value, 10)
        ))
        .join('')
}

function getRoman(place, digit) {
    if(digit === 0) {
        return ''
    }

    const placeSymbols = ['I', 'X', 'C', 'M', '']
    const halfPlaceSymbols = ['V', 'L', 'D', '']

    const symbol = placeSymbols[place]
    const halfSymbol = halfPlaceSymbols[place]
    const nextSymbol = placeSymbols[place + 1]

    switch (true) {
        case digit <= 3:
            return symbol.repeat(digit)
        case digit === 4:
            return symbol + halfSymbol
        case digit <= 8:
            return halfSymbol + symbol.repeat(digit - 5)
        case digit === 9:
            return symbol + nextSymbol
    }
}