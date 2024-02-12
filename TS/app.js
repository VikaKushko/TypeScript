"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_ts_1 = require("./modules/task1/Book.ts");
var array_ts_1 = require("./modules/task2/array.ts");
var combiningDataTypes_ts_1 = require("./modules/task3/combiningDataTypes.ts");
// Task1
var book = new Book_ts_1.Book('Book', 'Ostin Grey', 2021);
book.information();
// task2
var lastNumber = (0, array_ts_1.array)([1, 2, 3, 4, 5]);
console.log(lastNumber);
// task3
(0, combiningDataTypes_ts_1.combiningDataTypes)('Vika');
(0, combiningDataTypes_ts_1.combiningDataTypes)(5);
