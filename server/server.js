import http from 'http';





const server  = http.createServer((req,res)=>{

})

const PORT =process.env.PORT;

console.log(PORT)
server.listen(PORT,()=>{
    console.log(`server raning in ${PORT}`)
})

