import path from 'path';
import url from 'url';
const filePath = './dir1/dir2/test.txt';
// it is still not a real location but can be used to show how many utilities we have 



//basename
console.log(path.basename(filePath));


//dirname
console.log(path.dirname(filePath));

// extname
console.log(path.extname(filePath));



const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//join -- it will create a file path based on arguments passed 
// on diff os on linux or mac there is / in the name but in windows it is \
// so wehn used join it will automatically put the write join in

const filePath2 = path.join(__dirname,'dir1','dir2','test.txt');
console.log(filePath2);


// resolve() -- same as join 
const filePath3 = path.resolve(__dirname,'dir1','dir2','test.txt');
console.log(filePath3);