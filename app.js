const http=require('http')
const express=require('express');
const app=express();

app.use('/',(req,res,next)=>{
    console.log('First MiddleWare');
 res.send('<h1>First Page</h1>')
})


app.use('/second',(req,res,next)=>{
    console.log('Second  MiddleWare');
 res.send('<h1>Second Page</h1>')
})



app.listen(3000);