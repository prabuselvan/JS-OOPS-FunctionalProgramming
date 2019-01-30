let person = {name: 'Prabu', age:30};

// 
// for (let keys in person) {
//     console.log(person[keys]);
// }
// console.log(Object.keys(person.toString()));

// let objectBase = Object.getPrototypeOf(person);
// console.log('objectBase is ', objectBase);
// let descriptor= Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log('Object descriptor ', descriptor);

Object.defineProperty(person, 'name', {
    writable:false, //  cannot overide the old value
    enumerable: false, //  cants show in the console
    configurable: true
});

// Object.defineProperty(person, 'age', {
//     writable: false, // cannot overide the old value
//     enumerable: false,  // cants show in the console

// })

// person.name='Selvan';

delete  person.name;

// console.log(person);
// console.log(Object.keys(person))
console.log(person);



