// task1
const str: string = 'Vika';
console.log(str);

const num: number = 18;
console.log(num);

const boo: boolean = true;
console.log(boo);

const n: null = null;
console.log(n);

const und: undefined = undefined;
console.log(und);

const obj: object = {name: 'Vika'};
console.log(obj);

const an: any = 'Alina';
console.log(an);

function v (): void{
    console.log('Ok')
}
v();

function throwError(message: string): never {
    throw new Error(message);
}

const unk: unknown = 10;
if (typeof unk === 'number') {
    console.log(unk + 10);
}

// Task2
interface Person {
    name: string;
    age: number;
    hobbies: string[];
}


const person: Person = {
    name: 'Vika',
    age: 18,
    hobbies: ['run', 'read']
};
console.log(person)

// Task3
const sum = (a: number,b: number):void  =>{
    console.log(a + b)
}
sum(2,3);

// Task4
enum WeekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const currentDay: WeekDay = WeekDay.Saturday;
console.log("Today is:", currentDay);
