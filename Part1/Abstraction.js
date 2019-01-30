// hide the detail and show the essentials

function Circle(radius) {
    this.radius = radius;
    
    this.defaultLocation = { x: 0, y:1}

    this.computeMinimumLocation = function (para1) {
            console.log(para1);
            
    };
    this.draw= function () {

        this.computeMinimumLocation('Testing');
        console.log('draw');
        
    };
}

const circle = new Circle(12);
circle.draw();

// everything should not be public required things make it public