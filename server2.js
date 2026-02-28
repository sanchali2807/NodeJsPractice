import {createServer} from 'http';

const users = [
    {id:1 , name: 'John Doe'},
    {id:2 , name: 'Joh Doe'},
    {id:3 , name: 'Jon Doe'}
];

// logger middleware
const logger = (req,res,next)=>{
    console.log(`${req.method}.  ${req.url}`);
    next();
    // next is to tell that this middleware is done yoou can move tp the next one

}

const server = createServer((req,res)=>{
    logger(req,res,()=>{
        if(req.url === '/api/users' && req.method == 'GET'){
            res.setHeader('Content-type','application/json');
            res.write(JSON.stringify(users));
            res.end();
        }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
            const id = req.url.split('/')[3];
            const user = users.find((user)=>{
                return user.id === parseInt(id);
            })
            if(user){
                 res.setHeader('Content-type','application/json');
               res.write(JSON.stringify(user));
               res.end();
            }else{
                res.setHeader('Content-type','application/json');
             res.statusCode = 404;
            res.write(JSON.stringify('User  not found'));
            res.end();
            }
        }else{
             res.setHeader('Content-type','application/json');
             res.statusCode = 404;
            res.write(JSON.stringify('Route not found'));
            res.end();
        }
    });
});
const port = process.env.PORT;
server.listen(port,()=>{
    console.log(`server running on port ${port}`);
})