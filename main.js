import express from 'express';

const app = express();
const PORT = 6969;

app.get('/',(req,res)=>{
    res.json({message:"Hello Students"})
});

app.listen(PORT,()=>{
console.log(`the server is running at http://localhost:${PORT}`)
})

//DRY Principle- Don't Repeat Yourself
//KISS Principle- Keep it Simple, Stupid