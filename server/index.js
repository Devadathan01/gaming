//integration ||||||||

const express = require('express')
const cors = require('cors')

const dataservice = require('./services/dataservice')


const app =express()
//to parse JSON
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.use(cors({
    origin:'http://localhost:4200'
}))



//api to get all products

app.get('/all-products',(req,res)=>{
    dataservice.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


//paid products

app.get('/paid',(req,res)=>{
    dataservice.paid()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//free products


app.get('/free',(req,res)=>{
    dataservice.free()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


//api to post downloads

app.post('/addtodownloads',(req,res)=>{
    dataservice.addtodownloads(req.body.id,
        req.body.Name,
        req.body.downloadsize)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//api to get downloads

app.get('/getdownloads',(req,res)=>{
    dataservice.getdownloads()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


// login

app.post('/login',(req,res)=>
{
    dataservice.login(req.body.username,req.body.password)
    .then(result=>
        {
            res.status(result.statusCode).json(result)
        })
})

// register

app.post('/register',(req,res)=>
{
  dataservice.register(req.body.username,req.body.password,req.body.number)
  .then(result=>
    {
        res.status(result.statusCode).json(result)
    })
})

// delete

app.delete('/delete/:id',(req,res)=>
{
  dataservice.deletedownload(req.params.id)
  .then((result)=>
    {
        res.status(result.statusCode).json(result)
    })
})
