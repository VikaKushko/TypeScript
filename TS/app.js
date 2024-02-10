// task1
var str = 'Vika';
console.log(str);
var num = 18;
console.log(num);
var boo = true;
console.log(boo);
var n = null;
console.log(n);
var und = undefined;
console.log(und);
var obj = { name: 'Vika' };
console.log(obj);
var an = 'Alina';
console.log(an);
function v() {
    console.log('Ok');
}
v();
function throwError(message) {
    throw new Error(message);
}
var unk = 10;
if (typeof unk === 'number') {
    console.log(unk + 10);
}
var person = {
    name: 'Vika',
    age: 18,
    hobbies: ['run', 'read']
};
console.log(person);
// Task3
var sum = function (a, b) {
    console.log(a + b);
};
sum(2, 3);
// Task4
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 0] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 1] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 2] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 3] = "Thursday";
    WeekDay[WeekDay["Friday"] = 4] = "Friday";
    WeekDay[WeekDay["Saturday"] = 5] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 6] = "Sunday";
})(WeekDay || (WeekDay = {}));
var currentDay = WeekDay.Saturday;
console.log("Today is:", currentDay);
