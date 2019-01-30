// classical and prototypical inheritance

// alert('hey');

// every object has the constructor property which reference the function used to create the object

function Circle(radius) {
    this.radius=radius;
    this.draw= function () {
        console.log('draw');
        
    }
};

const circle = new Circle(10);

