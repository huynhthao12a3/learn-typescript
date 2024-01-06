export function isPositive(n: number) {
    return n > 0;
}
// 2 == '';
null === undefined;

let channel: 1 = 1;
let channel2: 2 = 2;

let testVar: true | false;

let var1 = 1;
let var2 = 'string';

const var3 = 1;
const var4 = 'string';

const varObj = {
    name: 1,
    age: '19',
} as const;

// varObj.name = 2;
console.log(varObj);

function getName(name: 'stringName') {
    console.log(name);
}
let nameStr = 'stringName';
getName(nameStr as 'stringName');
'a' as 'string';

function sum(a: number, b: number): string {
    return a + b.toString();
}

function getLength(numberList: number[] = []) {
    return Array.isArray(numberList) ? numberList.length : 0;
}

var employee: [number, string] = [1, 'Steve'];
employee.push(2, 'Bill');
employee.push('bilhhfd', 'fdsdfsfdsdfsdfdsf');
console.log(employee);
