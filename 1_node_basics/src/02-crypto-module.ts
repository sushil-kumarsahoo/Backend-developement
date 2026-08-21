import { log } from "node:console";
import crypto from "node:crypto"

//built in node js module
//secuirity related tasks
//creating random UUID, IDs
//Creating secure token
//hashing data
//encryption and decryption

//Unique id used in user id,payment id, session id
const requestId = crypto.randomUUID ()
console.log(requestId);

//password reset token
//email verification token 
//session secret / api keys
//1 byte becomes 2 characters string when you convert it into hexadecimal format 
//MD5 (Message-Digest Algorithm 5) is a hashing algorithm that takes input data and produces a fixed-length 128-bit (16-byte) hash, usually displayed as 32 hexadecimal characters.
//MD5 is considered cryptographically broken. It is extremely fast, and attackers can efficiently search for inputs that produce matching hashes. It also has practical collision vulnerabilities, meaning two different inputs can be constructed to produce the same MD5 hash.
const resetToken = crypto.randomBytes(16).toString("hex")

console.log(resetToken);

//hash is 1 way cant be converted back
const text = "hello node";

const hash = crypto.createHash('sha256').update(text).digest('hex')

console.log(hash);

//nnormal hash: data -> hash
//HMAC: data + secret -> signed hash
const secretKey = "my-super-secret-key"
const message = "user-id-1"
const signature = crypto.createHmac('sha256',secretKey).update(message).digest("hex")

console.log(signature);

const signatureVerify = crypto.createHmac('sha256',secretKey).update(message).digest("hex")

console.log(signature === signatureVerify);
