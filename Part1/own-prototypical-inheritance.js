function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log('Duplicate from shape');
}

function Circle(radius) {
    this.radius=radius;
}
Circle.prototype.draw = function () {
    console.log('draw');
}

// Circle.prototype.duplicate= function() {
//     console.log('duplicate'); 
// }

// if it is not inherited
// Circle.prototype= Object.create(Object.prototype);
Circle.prototype=Object.create(Shape.prototype);

const s= new Shape();

const c= new Circle(121);
