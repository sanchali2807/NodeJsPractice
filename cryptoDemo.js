// encrypt and decrypt data

import crypto from 'crypto';

//create hash
const hash = crypto.createHash('sha256');
// to actually hash something we use the update method

hash.update('password1234');
// console.log(hash.digest('hex'));

//random bytes
crypto.randomBytes(16 ,(err,buff)=>{
    if(err)throw err;
    // console.log(buff.toString('hex'));
})


//If you need…	Use
// Same output for same input	createHash()
// Completely unpredictable value	randomBytes()


// cypher text
// encrypt readable text to cypher text and cypher text can only be decrypted by someone who posses a key
// uses an iv so even if the text remains same the encrypted format is always diff


// create cipher iv , createDecipherIV

const algortihm = 'aes-256-cbc';
const key  = crypto.randomBytes(32);
const IV = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algortihm,key,IV);
let encrypted = cipher.update("this is a secret message" , 'utf-8','hex');
encrypted += cipher.final('hex');
console.log(encrypted);


//decrypt
const decipher = crypto.createDecipheriv(algortihm,key,IV);
let dencrypted = decipher.update(encrypted, 'hex','utf-8');
dencrypted += decipher.final('utf-8');
console.log(dencrypted);