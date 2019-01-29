function Circle (radius) {

    let color = 'red'; // private variables 
    this.radius=radius;
    let defaultLocation = {
        x:1,
        y:1
    };
    // closures
    // local function
    let computeOptimimLocation = function (factor) {
        // 
    }
    this.draw = function() {
        let x, y;
        // local varibles of parent method can be accessed directly
        // members of parent method can be accessed using this
        computeOptimimLocation(232);
        console.log('draw method');
        console.log(color);
        console.log(defaultLocation);
        
        
    }
}

const circle = new Circle(100);

console.log(circle);
