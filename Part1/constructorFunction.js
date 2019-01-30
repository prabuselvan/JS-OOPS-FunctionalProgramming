// constructor function should always be a capital letter
function Circle(radius) {
    console.log('this ',this);
    
    this.radius = radius;
    this.draw = function () {
        console.log('this is draw function');
        
    };
    return this;
}

const c1 =  Circle(100); // this defines the window object

const c2 = new Circle(200)// new  operator defines the Circle object



