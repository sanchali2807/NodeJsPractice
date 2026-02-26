const port = process.env.PORT;
import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
// get current path
// --filename get the current file path
// __dirname current path of directory
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__dirname,__filename);

const server = http.createServer((req,res)=>{
    try{
        if(req.method == 'GET'){
            if(req.url === '/'){
                res.writeHead(200,{'Content-type' : 'text/html'});
                res.end('<h1>HOMEPAGE</h1>');
            }else if(req.url === '/about'){
                 res.writeHead(200,{'Content-type' : 'text/html'});
                res.end('<h1>About</h1>');
            }else{
                 res.writeHead(404,{'Content-type' : 'text/html'});
                res.end('<h1>NOT FOUND</h1>');
            }
        }else{
            throw new error('method not allowed');
        }
    }catch(error){
         res.writeHead(500,{'Content-type' : 'text/html'});
                res.end('<h1>Server error</h1>');
    }
    // console.log(req.url);
    // console.log(req.method);
    // res.write('hello world');
    //here it is important to end it 
    // res.end();
});
server.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
 