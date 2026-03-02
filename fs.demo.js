// import fs from 'fs';
import fs from 'fs/promises';
 

// read file async version 
// callback version is the default

// to read the file we need three things the location of the file then utf 8 then then callback so it is synchronous so theat when the file is read  
// fs.readFile('./test.txt','utf-8',(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// });


// read file sync synchronous version 
// const data = fs.readFileSync('./test.txt','utf-8');
// console.log(data);



// readFile --- promise .then
// fs.readFile('./test.txt','utf-8')
//   .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// });



// read file suing async await 

const readFileFun = async()=>{
    try{
    const data = await fs.readFile('./test.txt','utf-8');
    console.log(data);
    }catch(err){
    console.log(err);
    }
}
readFileFun();