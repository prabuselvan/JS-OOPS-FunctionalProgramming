function Stopwatch() {
    let duration =0;
    let startTime =0;
    let endTime= 0;
    let  running = 0;

    this.start = function () {

        if (running) {
            throw new Error('Stopwatch is already Started');
        }
            running=true;
            startTime=new Date().getTime();
            console.log('started' ,startTime);
    },
    this.stop = function () {
        if(!running) {
            throw new Error('Stopwatch is not started');
        }
        endTime = new Date().getTime();
        running=false;
        const seconds = (endTime -  startTime)/1000;
        duration += seconds;
    },
    this.reset= function () {
        duration = null;
        startTime= null;
        endTime=null;
        duration=0;
    };

    // to access the local variables of parent method we have to user Object.defineProperty

    // Object.defineProperty(this, 'duration', {
    //     get: function () {
    //         return duration;
    //     }
    // })
    
}

const sw = new Stopwatch();

// sw.start();
// sw.stop();
// console.log(sw.diff);

