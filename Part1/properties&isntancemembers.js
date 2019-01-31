function Circle (radius) {
    // instance members
    this.radius=radius;
    this.draw= function () {
        console.log('draw');
        // accessing the prototype members from instance members
        this.shape();
    }
}


// console.log(c1);
// Circle.prototype we can change the implementation directly on the function constrcutor
// Prototype members
Circle.prototype.shape= function() {
    console.log('shape');
    // accessing the instance members from prototype members
    // this.draw();
}
// console.log(c1.__proto__===Circle.prototype);
// we can overrirde the existing methods also
Circle.prototype.toString = function () {
    return 'Circle with radius ' + this.radius
};

const c1= new Circle(122);

const c2= new Circle(500);

// console.log(c1.toString());
// console.log(c2.toString());
c1.draw();
