// Primitve types are copied by their values
// Number,String, Boolena,Symbols,Undefined,Null 

// EG:1
// let x = 100;
// let y=x;
// x=200;

// dealing with two independent copies
// E:G2

// Objects are copied based on the address
let x = {
    value: 100
};

let y  = x;

x.value=700;


let obj = {
    value : 2000
};

function increment(obj) {
    obj.value++;
    console.log('Local variable ', obj.value);   
}

increment(obj);
console.log(obj);








// Reference types / Objects are copied by their address