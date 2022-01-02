'use strict'

//todo Завдання 1

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

class DescribesTheCircle {
// поле, що зберігає радіус кола;
    constructor(radius) {
        this.radius = radius;
    }
// get-властивість, яке повертає радіус кола;
    get radius() {
        return this._radius;
    }
// set-властивість, що встановлює радіус кола;
    set radius(value) {
        this._radius = value;
    }
// get-властивість, яке повертає діаметр кола;
    get diameter() {
        return this.radius * 2;
    }
// метод, що обчислює площу кола;
    carArea() {
        return +(Math.PI * this.radius ** 2).toFixed(2);
    }
// метод, що обчислює довжину кола.
    circuit() {
        return +(2 * Math.PI * this.radius).toFixed(2);
    }
}

// Продемонструй роботу властивостей і методів.
const circle = new DescribesTheCircle(50);
console.log('[circle.radius]', circle.radius);
circle.radius = 20;
console.log('[circle.radius]', circle.radius);
console.log('[circle.diameter]', circle.diameter);
console.log('[circle.carArea()', circle.carArea());
console.log('[circle.circuit()', circle.circuit());

// Завдання 2

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

class DescribesTheMarker {
    // поле, яке зберігає колір маркера;
    // поле, яке зберігає кількість чорнил у маркері (у відсотках);
    constructor(color, numberInk) {
        this.color = color;
        this.numberInk = numberInk;
    }

    
}

// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

// Продемонструй роботу написаних методів.


// Завдання 3

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().