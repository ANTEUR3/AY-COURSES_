import http from 'http';
import { Students,Courses,projectsIdea,Exams } from '../server/ProjectData.js';




const server  = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins, or specify: 'https://yourdomain.com'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Max-Age', '86400'); 
    if(req.url === '/api/courses'){
       
            res.writeHead(200,{'Content-Type':'application/json'});
            
            res.write(JSON.stringify(Courses))
            
            res.end();
        
    }else if(req.url === '/api/sm'){
        res.writeHead(200,{'Content-Type':'application/json'});
        let sm=req.body.sm;
        res.write(JSON.stringify({name:'YOUNES'}))
        res.end();
    }else if(req.url === '/api/ProjectsIdeas'){
        res.writeHead(200,{'Content-Type':'application/json'});
            
            res.write(JSON.stringify(projectsIdea))
            
            res.end();
    }else if(req.url === '/api/Exams'){
        res.writeHead(200,{'Content-Type':'application/json'});
            
            res.write(JSON.stringify(Exams))
            res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.write(JSON.stringify({message:'Route not found'}))
        res.end();
    }

})

const PORT =process.env.PORT;

console.log(PORT)
server.listen(PORT,()=>{
    console.log(`server raning in ${PORT}`)
})

