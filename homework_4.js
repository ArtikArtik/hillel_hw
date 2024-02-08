// Завдання 1. Прямокутний трикутник двома способами
// Спосіб 1: За допомогою циклів
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

drawTriangle(5, '*');

// Спосіб 2: За допомогою рекурсії
function drawTriangleRecursive(height, symbol, currentRow = 1) {
    if (currentRow > height) {
        return;
    }

    let row = '';
    for (let i = 1; i <= currentRow; i++) {
        row += symbol;
    }
    console.log(row);

    drawTriangleRecursive(height, symbol, currentRow + 1);
}

drawTriangleRecursive(5, '#');


// Завдання 2. Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}

console.log(`Сума чисел від 1 до 100, які не кратні 3: ${sum}`);



// Завдання 3. Зведення числа у ступінь з функцією pow(x,y) без використання оператору піднесення до ступення.

function pow(x, y) {
    // Перевірка, чи y - ціле число
    if (Number.isInteger(y)) {
        let result = 1;

        // Обчислення ступеня
        for (let i = 0; i < Math.abs(y); i++) {
            result *= x;
        }

        // Зворотній результат для від'ємного ступеня
        if (y < 0) {
            return 1 / result;
        }

        return result;
    } else {
        console.log("Помилка: другий аргумент повинен бути цілим числом");
        return NaN;
    }
}

// Введення чисел з клавіатури
let base = parseFloat(prompt("Введіть число, яке ми будемо зводити у ступінь:"));
let exponent = parseInt(prompt("Введіть ступінь, у який ми будемо підносити число:"));

// Перевірка на введення чисел
if (!isNaN(base) && !isNaN(exponent)) {
    // Виведення результату
    console.log(`Результат: ${pow(base, exponent)}`);
} else {
    console.log("Помилка: Введено некоректні значення.");
}
