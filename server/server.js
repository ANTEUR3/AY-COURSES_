import http from 'http';
import { Students,Courses,projectsIdea,Exams,Questions } from '../server/ProjectData.js';




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
    else if(req.url === '/api/Questions'){
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        
        // Process the complete request body
        req.on('end', () => {
            try {
                // Parse JSON body
                const parsedBody = JSON.parse(body);
                const { id } = parsedBody; // Now you can destructure from the parsed body
                
                res.writeHead(200, {'Content-Type': 'application/json'});
                const questions=Questions.filter((q)=>q.exam==id)
             
                const exam=Exams.find((e)=>e.id==id)
                console.log(questions)
                res.write(JSON.stringify({ questions,exam }));
                res.end();
            } catch (error) {
                // Handle JSON parsing error
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }});
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

