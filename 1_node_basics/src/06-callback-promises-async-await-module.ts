import { rejects } from "node:assert";
import { resolve } from "node:dns";


type User = {
    id: number;
    name: string;
    role: "user" | "super-admin"
}

const users: User[] = [
    {
        id: 1,
        name: "sushil",
        role: "user"
    },
    {
        id: 2,
        name: "soumya",
        role: "super-admin"
    },
    {
        id: 3,
        name: "soumyadarshi",
        role: "super-admin"
    }

]


//callback is a function - this function you are passing to a diff function as a parameter
//callback(error,result) => classic node js callback pattern


//using Callback

function findUserWithCallback(
    userId: number,
    callback: (error: Error | null, user?: User) => void
): void {
    setTimeout(() => {
        const user = users.find(currenuser => currenuser.id == userId)

        if (!user) {
            callback(new Error(`user with id ${userId} was not found`))
            return;
        }

        callback(null, user)
    }, 1500)
}

// findUserWithCallback(2, (error,user) => {
//     if(error){
//         console.log(`callback error :`, error.message);
//         return
//     }
//     console.log(`callback result :`, user?.id, user?.name, user?.role);
// })


//using Promise

function fetchUserWithpromise(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((curruser) => curruser.id == userId)

            if (!user) {
                reject(new Error(`User with ${userId} data was not found`))
                return
            }

            resolve(user)
        }, 1000)
    })
}

fetchUserWithpromise(1).then((user) => {
    console.log(`Promise result`, user?.id, user?.name, user?.role);
}).catch((error: Error) => {
    console.log(`Promise error`, error.message);

})


//using async await

async function findUserWithAsyncAwait(userId:number):Promise<void> {
    try{
       const user = await fetchUserWithpromise(userId)
       console.log('async/await',user.id,user.name,user.role);

       
    }catch(error){
       const message = error instanceof Error ? error.message : "unknown error"
       console.log('async/await',message);
       
    }
}
// findUserWithAsyncAwait(10)