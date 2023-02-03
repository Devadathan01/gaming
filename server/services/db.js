// import mongoose

const mongoose = require('mongoose');
//define connection string

mongoose.connect('mongodb://localhost:27017/games',()=>{
    console.log('connected to database');
})

//model creation
const Product = mongoose.model('Product',{
    id:Number,
    Name:String,
    price:Number,
    description:String,
    prize:Number,
    downloadsize:String,
    rating:String,
    img:String,
    cat:String
    
})


const downloads =mongoose.model('downloads',{
    id:Number,
    Name:String,
    downloadsize:String
})


const userlogin = mongoose.model('user',{
  username:String,
  password:String
})

const userregister = mongoose.model('register',
{
    username:String,
    password:String,
    number:String


})
//4.export 

module.exports={
Product,
downloads,
userlogin,
userregister
}