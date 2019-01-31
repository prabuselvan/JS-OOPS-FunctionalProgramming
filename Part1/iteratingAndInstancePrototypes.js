function Circle (radius) {
    this.radius=radius;
    this.move= function ( ) {
        console.log('Move function from Circle ');
        this.draw();
    }
};

Circle.prototype.draw = function () {
    console.log('draw method from prototype');
    //  this.move();  
};
const c1= new Circle(1231);
// console.log(c1.move());
console.log(Object.keys(c1)); // return only instance members

for (let key in c1) console.log(key); // return instance and prootype members

console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('draw'))