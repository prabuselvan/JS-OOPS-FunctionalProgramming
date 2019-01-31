function Stopwatch() {
    let duration =0;
    let startTime =0;
    let endTime= 0;
    let  running = 0;

    // instance members are read only cannot modeify the values directly

    // this.start = function () {

    //     if (running) {
    //         throw new Error('Stopwatch is already Started');
    //     }
    //         running=true;
    //         startTime=new Date().getTime();
    //         console.log('started' ,startTime);
    // },
    // this.stop = function () {
    //     if(!running) {
    //         throw new Error('Stopwatch is not started');
    //     }
    //     endTime = new Date().getTime();
    //     running=false;
    //     const seconds = (endTime -  startTime)/1000;
    //     duration += seconds;
    // },
    // this.reset= function () {
    //     duration = null;
    //     startTime= null;
    //     endTime=null;
    //     duration=0;
    // };

    // to access the local variables of parent method we have to user Object.defineProperty

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration
        },
        set:  function (value) {
            return duration =value;
        } 
    });

    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime
        }
    });

    Object.defineProperty(this, 'endTime', {
        get: function () {
            return endTime
        }
    });
    
    Object.defineProperty(this, 'running', {
        get: function () {
            return  running
        }
    })
}

Stopwatch.prototype.start = function () {
    if (this.running) {
        throw new Error('Stopwatch is already Started');
    }
        this.running=true;
        this.startTime=new Date().getTime();
        console.log('started' ,this.startTime);
}

Stopwatch.prototype.stop = function () {
    if(!this.running) {
        throw new Error('Stopwatch is not started');
    }
    this.endTime = new Date().getTime();
    this.running=false;
    const seconds = (this.endTime -  this.startTime)/1000;
    console.log(seconds);
    this.duration +=seconds;
    console.log(this.duration)
}

Stopwatch.prototype.reset = function() {
    this.running=false;
    this.startTime= null;
    this.endTime=null;
    this.duration=0;
}


const sw = new Stopwatch();

// sw.start();
// sw.stop();
// console.log(sw.diff);

