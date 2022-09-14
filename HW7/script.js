"use strict"
const calc = createCalculator(10);

function createCalculator() {
    return {
        sum: () => a + 10,
        mult: () => sum * 10,
        sub: () => mult - 40,
        div: () => sub / 10,
        set: (b) => a = b,
    }
}


