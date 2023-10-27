// Esta es mi funcion que suma dos numeros
const sum = (a, b) => {
    return a + b;
}

//Solo un registro en la consola para nosotros
console.log(sum(7,3));

// One euro is:   This our information
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una funcion con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos e valor a dolares
    let valueInDollar = valueInEuro * 1.07;
    //Retornamos el valor en dolares
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYenRaw = valueInDollar * 146.3;
    let valueInYen = valueInYenRaw.toFixed(1);
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * 0.0055;
    return valueInPound;
}

// Exporta la funcion para usarla en otros archivos
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


