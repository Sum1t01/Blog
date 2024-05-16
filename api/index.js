import express from 'express';

const app = express();

const port = 3000;

app.get('/',(req, res)=>{
console.log("Ding!");
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}...`);
})