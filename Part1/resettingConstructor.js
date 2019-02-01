function Shape(length) {
    this.length=length;
}

Shape.prototype.duplicate= function() {
    console.log('Draw method from Shape');
}
// every object in javascript has a constructor property the returns the function that is used to create the object

function Circle(radius) {
    this.radius=radius;
}

Circle.prototype = Object.create(Shape.prototype);
// resetting the constructor
Circle.prototype.constructor=Circle;

Circle.prototype.draw= function () {
    console.log('draw method from Cirlce');
}



const s1= new Shape(12);

const c1= new Circle(2121);
