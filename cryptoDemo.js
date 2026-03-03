// encrypt and decrypt data

import crypto from 'crypto';

//create hash
const hash = crypto.createHash('sha256');
// to actually hash something we use the update method

hash.update('password1234');
console.log(hash.digest('hex'));