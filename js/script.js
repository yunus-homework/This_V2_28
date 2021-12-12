"use strict";
const calculator = {
  read: () => {
    this.sum = +prompt("First sum", 0);
    this.sum2 = +prompt("Second sum", 0);
  },
  sum: () => {
    return this.sum + this.sum2;
  },

  mul: () => {
    return this.sum * this.sum2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
