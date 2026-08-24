
import {setTimeout as sleep} from 'node:timers/promises'


function runSetTimeOutExamplee(): void {
    console.log('1. setTimeOut example started');
    setTimeout(() => {
        console.log('2. this runs after 1 sec');
    }, 1000)
    console.log('3. this runs immidietly');
}

function runClearTimeOutEx(): void {
    const timerId = setTimeout(() => {
        console.log('This message will not run');
    })
    clearTimeout(timerId)
    console.log('4. clear timeout cancelled the 2 second timer');
}


function runsetinterval(): void {
    console.log('6. setInterval example started');
    let count = 0;
    const intervalId = setInterval(() => {
        count++
        console.log(`setInteval tick ${count}`);
         if(count == 3){
            clearInterval(intervalId)
            console.log('set interval stopped');
         }
         
    }, 1000);
}

function setImmediateExample():void{
    setImmediate(()=>{
        console.log('7. setimmidiate callback');
    })
    console.log('8. synchronous code after set immidiate');
}

async function promiseTimerExample(): Promise<void>{
   console.log('9. waiting for promise based timer');
   await sleep(5500)
   console.log('10 promise based timer finishes after 5.5 seconds');
   
}

function runTimerDemo(): void {
    runSetTimeOutExamplee()
    runClearTimeOutEx()
    runsetinterval()
    setImmediateExample()
}
//runTimerDemo()

promiseTimerExample().catch((error : unknown) => {
    console.error('Timer based demo failed');
    
})
