// alert('prabu');
//  constructors are also have prototype property 
let myobj = {name: 'Prabu'};
let urobj = {name: 'Selvan'}
console.log(myobj);
const t1 = Object.getPrototypeOf(myobj);
console.log(t1);


function Circle (radius) {
    this.radius = radius;
}



const circle = new Circle(120);





