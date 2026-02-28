import {createServer} from 'http';

const users = [
    {id:1 , name: 'John Doe'},
    {id:2 , name: 'Joh Doe'},
    {id:3 , name: 'Jon Doe'}
];

const server = createServer((req,res)=>{
if(req.url === '/api/users' && req.method == 'GET'){
    res.setHeader('Content-type','application/json');
    res.write(JSON.stringify(users));
    res.end();
}else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
     res.setHeader('Content-type','application/json');
    res.write(JSON.stringify({id: 1,name: 'John Doe'}));
    res.end();
}else{
     res.setHeader('Content-type','application/json');
     res.statusCode = 404;
    res.write(JSON.stringify('Route not found'));
    res.end();
}
});
const port = process.env.PORT;
server.listen(port,()=>{
    console.log(`server running on port ${port}`);
})