
function Circle (radius) {
    this.radius=radius;
    this.draw= function() {
        console.log('draw from Circle');
        
    }
}

// functions are objects

// Every function has functio constrcutor to define the object

Circle.call({}, 50);

Circle.apply({}, [121]);
// const another = new Circle(100);


const Circle1 = new Function ('radius', `
this.radius=radius;
this.draw= function  () {
    console.log('This is draw from Circle1')
}`);

const circle = new Circle1(1212);
