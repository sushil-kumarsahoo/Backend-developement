
// user registered
// send a welcome email
// write a log
// notify some other services

import { EventEmitter } from "node:stream"

// emit onr event -> listners listen to this event, do something
// .on() -register one listner
// .once() - register one listner that runs only once
// .emit() - triggers an event and sends to the listners

const appEvents = new EventEmitter()

type userRegisterPayload = {
    id:number,
    email:string
}

appEvents.on("user-registered",(user: userRegisterPayload) => {
  console.log(`Email listners: Welcome email send to this user ${user.email}`);
  
})

appEvents.on("user-registered",(user:userRegisterPayload)=>{
    console.log(`log listner: user ${user.id} and email is ${user.email}`);
    
})

appEvents.once("app-started",()=>{
    console.log("once listner:app started");
    
})

function registerUser(): void{
    const user = {
        id:1,
        email: "sushil@gmail.com"
    }
    console.log("user saved");   
    appEvents.emit("user-registered", user)
    console.log("register user: event listner completed");
    
}

appEvents.emit("app-started");
appEvents.emit("app-started");

registerUser()
