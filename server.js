const port = process.env.PORT;
import http from 'http';

const server = http.createServer((req,res)=>{
    
    // console.log(req.url);
    // console.log(req.method);
    // res.write('hello world');
    //here it is important to end it 
    // res.end();
});
server.listen(port,()=>{
    console.log(`server running on port ${port}`);
})