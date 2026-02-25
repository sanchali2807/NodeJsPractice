import http from 'http';

const server = http.createServer((req,res)=>{
    res.write('hello world');
    //here it is important to end it 
    res.end();
});
const port = 2345
server.listen(port,()=>{
    console.log(`server running on port ${port}`);
})