function celsiusToFahrenheit(celcius) {
    let fahrenheit = (celcius * 1.8) + 32;
    return fahrenheit + " F";
}

function fahrenheitToCelcius(fahrenheit) {
    let celcius = (fahrenheit - 32) / 1.8;
    return celcius + " C";
}

console.log(celsiusToFahrenheit(100));
console.log(fahrenheitToCelcius(100));