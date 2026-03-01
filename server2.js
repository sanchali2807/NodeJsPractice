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
//JSON middleware
const jsonMiddle = (req,res,next) =>{
res.setHeader('Content-type','application/json');
next();
}

//routing handler for /api/users
const getUserHandler = (req,res,next)=>{
     res.write(JSON.stringify(users));
     res.end();
}

// handler for get user by id
const getUserByIdHandler = (req,res,next)=>{
 const id = req.url.split('/')[3];
            const user = users.find((user)=>{
                return user.id === parseInt(id);
            })
            if(user){
                //  res.setHeader('Content-type','application/json');
               res.write(JSON.stringify(user));
               res.end();
            }else{
                // res.setHeader('Content-type','application/json');
             res.statusCode = 404;
            res.write(JSON.stringify('User  not found'));
            res.end();
            }
}

//not found
const notFoundHandler = (req,res,next)=>{
     res.statusCode = 404;
            res.write(JSON.stringify('Route not found'));
            res.end()
}


// route handler for post request of /api/users
const createUseHandler = (req,res,next) =>{
    let body = '';
    // lsiten for an event or data
    req.on('data',(chunk)=>{
        body += chunk.toString();
    });
    req.on('end' , ()=>{
        // json to java script object
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        // java script object to json 
        res.write(JSON.stringify(newUser));
        res.end();
    })

}
const server = createServer((req,res)=>{
    logger(req,res,()=>{
        jsonMiddle(req,res,()=>{
            if(req.url === '/api/users' && req.method === 'GET'){
                getUserHandler(req,res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserByIdHandler(req,res);
            }else if(req.url === '/api/users' && req.method === 'POST'){
                createUseHandler(req,res);
            }
            else{
                notFoundHandler(req,res);
            }
        })
    //     if(req.url === '/api/users' && req.method == 'GET'){
            
    //         res.write(JSON.stringify(users));
    //         res.end();
    //     }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
    //         const id = req.url.split('/')[3];
    //         const user = users.find((user)=>{
    //             return user.id === parseInt(id);
    //         })
    //         if(user){
    //             //  res.setHeader('Content-type','application/json');
    //            res.write(JSON.stringify(user));
    //            res.end();
    //         }else{
    //             // res.setHeader('Content-type','application/json');
    //          res.statusCode = 404;
    //         res.write(JSON.stringify('User  not found'));
    //         res.end();
    //         }
    //     }else{
    //         //  res.setHeader('Content-type','application/json');
    //          res.statusCode = 404;
    //         res.write(JSON.stringify('Route not found'));
    //         res.end();
    //     }
    });
});    
const port = process.env.PORT;
server.listen(port,()=>{
    console.log(`server running on port ${port}`);
})