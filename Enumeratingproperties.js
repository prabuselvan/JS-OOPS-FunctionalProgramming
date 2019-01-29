function Circle (radius) {
    this.radius = radius;
    this.draw = function( ) {
        console.log('draw');
        }
}

const circle = new Circle(10);

// for in 

for(let key in  circle) {
    // console.log(key); // to get the key from the object
    // console.log(circle[key]); // to get the value from the object

    if (typeof circle[key] !== 'function') 
        console.log(key , circle[key])

}

// to get all the keys and object

const keys = Object.keys(circle);
console.log('To get all the keys ', keys);

if('radius' in circle) 
    console.log('Circle has a radius key');
    

