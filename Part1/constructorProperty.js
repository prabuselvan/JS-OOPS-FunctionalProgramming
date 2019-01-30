function createCirle(radius) {
    // console.log(this);
    
    return {
        radius : radius,
        draw: function () {
            console.log('this is draw method');
            
        }
    }
}

const c1=  createCirle(100);
console.log(c1.radius); // this is a window object
console.log(c1.constructor);

// c1.constructor defines the  Object
// console.log(this);


// constructor Function

function Circle (radius) {
    console.log(this); // this refers the circle object
    
    this.radius=radius;
    this.draw = function () {
        console.log('this is draw method');
        
    }
}

const c2 = new Circle(200);
console.log(c2); // c2.constructtor defines the Circle

