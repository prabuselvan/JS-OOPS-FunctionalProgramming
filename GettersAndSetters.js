function Circle (radius) {
    this.radius = radius;
    // local variables of Circle function
    let defaultLocation = {
        x: 1,
        y:1
    };
    let computeOptimumLocation = function () {

    };

    this.draw = function () {
        console.log(defaultLocation);
        console.log('draw');
    };

    this.getDefaultLocation= function () {
        return defaultLocation;
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y) 
                throw new Error('Invalid Location');
           defaultLocation=value; 
        }
    })

}
const circle = new Circle(120);

// private members of circle object
// console.log (circle.getDefaultLocation());
// console.log(circle.defaultLocation);

circle.defaultLocation=12;