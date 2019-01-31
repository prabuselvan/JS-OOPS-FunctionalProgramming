function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw method');
        
    }
};

// const circle = new Circle(122);

// console.log(circle);

// let person = {name: 'Prabu'};
// console.log(person);

// First way
// for (let key in person) {
//     console.log(key); 
// }

// second way

// const val= Object.keys(person);
// console.log(val.reverse());

// const objectBase = Object.getPrototypeOf(person);
// const descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');
// console.log(descriptor);

// Object.defineProperty(person,'name', {
//    writable: true,
//    enumerable: false,
//    configurable: true

// });

// person.name="Selvan";
// console.log(person.toString());
// console.log(Object.keys(person)); // enumerable is false it wont let the user to iterate

// delete person.name;
// console.log(person);

const c1= new Circle(100);
const c2= new Circle(200);