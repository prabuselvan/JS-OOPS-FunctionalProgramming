const circle = {
    radius: 1,
    location : {
        x:1,
        y:2
    },
    draw: function () {
        console.log('this is drawå');
        
    }
}



circle.draw()

// Factory Function
// Inside Factory pattern this is a window object

function createCirlce (radius) {
    console.log(this);
    
    return {
            radius : radius,
            location: {
                x:1,
                y:2
            },
            draw: function () {
                console.log('this is called factory pattern', radius);
                
            }
    }
}

const c1= createCirlce(100);

console.log(c1.draw());
