const express = require('express')
const app = express();
const port = process.env.PORT || 8000
require('./database/connection')
const studentModel = require('./models/students')
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello from the other side')
})
app.post('/students',async (req,res)=>{
        const data = new studentModel(req.body);
        const result = await data.save();
        res.send(result)
})
app.get('/students',async (req,res)=>{
        const result = await studentModel.find({});
        res.send(result)
})
app.put('/students/:id',async (req,res)=>{
        const result = await studentModel.findByIdAndUpdate({_id:req.params.id},{$set:{name:req.body.name}},{new:true});
        res.send(result)
})
app.delete('/students/:id',async (req,res)=>{
        const result = await studentModel.findByIdAndDelete({_id:req.params.id});
        res.send(result)
})

app.listen(port)