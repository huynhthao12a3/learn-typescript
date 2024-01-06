const studentList = [
  { id: 1, name: 'Alice', age: 11, gender: 'female' },
  { id: 2, name: 'Bob', age: 12, gender: 'male' },
];
const testObj = { id: 1, name: 'Alice', age: 11, gender: 'female' };

const newList = [...studentList];
newList[0] = 'Alice Alice';
console.log(studentList[0]);
console.log(newList[0]);

// const { id: id1, name } = testObj;
// console.log(id1, name);

const { id, ...rest } = testObj;
console.log(id, rest);
