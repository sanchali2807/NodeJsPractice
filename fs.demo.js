import fs from 'fs';
 

// read file async version 
// callback version is the default

// to read the file we need three things the location of the file then utf 8 then then callback so it is synchronous so theat when the file is read  
fs.readFile('/test.txt','utf-8',(err,data)=>{
    if(err)throw err;
    console.log(data);
});
