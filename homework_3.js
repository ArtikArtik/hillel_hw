function convertUnits(unit, value) {
    if (isNaN(value)) {
        return "Помилка: введіть числове значення";
    }

    let result;
    let newUnit;

    switch (unit.toLowerCase()) {
        case "кілометри":
            result = value * 1000;  // Кілометри в метри
            newUnit = "метри";
            break;
        case "години":
            result = value * 60;  // Години в хвилини
            newUnit = "хвилини";
            break;
        case "кілограми":
            result = value * 1000;  // Кілограми в грами
            newUnit = "грами";
            break;
        default:
            return "Помилка: введено некоректні дані. Введіть 'кілометри', 'години' або 'кілограми'.";
    }

    return value + " " + unit + " дорівнює " + result + " " + newUnit + ".";
}

let unit;
while (true) {
    unit = prompt("Введіть ('кілометри', 'години' або 'кілограми'):");
    if (["кілометри", "години", "кілограми"].includes(unit.toLowerCase())) {
        break;
    } else {
        alert("Помилка: введено некоректні дані. Введіть 'кілометри', 'години' або 'кілограми'.");
    }
}

let value = parseFloat(prompt("Введіть кількість:"));
let result = convertUnits(unit, value);
console.log(result);