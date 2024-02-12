
import { Book } from './modules/task2/array';
import { array } from './modules/task2/array';
import { combiningDataTypes } from './modules/task3/combiningDataTypes';


// Task1
const book = new Book('Book', 'Ostin Grey', 2021)
book.information();

// task2
const lastNumber: number | undefined =  array([1, 2, 3, 4, 5]);
console.log(lastNumber);

// task3
combiningDataTypes('Vika');
combiningDataTypes(5);



