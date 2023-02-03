const db=require('./db');
//get all the products from db
const getProducts = ()=>{
 return  db.Product.find().then(
(result)=>{
    if (result){
        return{
            status:true,
            statusCode:200,
            products:result
        }
    }
    else{
        return{
        status:false,
        statusCode:404,
        message:'No products found'
        }
    }
}
    )
}

//paid products
const paid = ()=>{
    return  db.Product.find({
        cat:"paid"
    }).then(
   (result)=>{
       if (result){
           return{
               status:true,
               statusCode:200,
               products:result
           }
       }
       else{
           return{
           status:false,
           statusCode:404,
           message:'No products found'
           }
       }
   }
       )
   }

   //free products
   const free = ()=>{
    return  db.Product.find({
        cat:"free"
    }).then(
   (result)=>{
       if (result){
           return{
               status:true,
               statusCode:200,
               products:result
           }
       }
       else{
           return{
           status:false,
           statusCode:404,
           message:'No products found'
           }
       }
   }
       )
   }


   const addtodownloads =(
   
        id,
        Name,
        downloadsize
    
    
   
   )=>{
    //data add too mongodb
    return db.downloads.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Game already Exists"
                }
            }
            else{
                const newgames = new db.downloads(
                    {
                        id,
        Name,
        downloadsize
                    }
                )

                newgames.save() //save to mongodb

                return{
                    status:true,
                    statusCode:200,
                    message:"Games added to downloads"
                }

               
            }
        })
   }

   const getdownloads = ()=>{
    return  db.downloads.find().then(
   (result)=>{
       if (result){
           return{
               status:true,
               statusCode:200,
               products:result
           }
       }
       else{
           return{
           status:false,
           statusCode:404,
           message:'Your Downloads is Empty'
           }
       }
   }
       )
   }
 
   const login=(username,password)=>{
    return db.Userlogin.findOne({username,password})
    .then(user=>{
        if(user){

            currentUser=user.username

            return{
                status:true,
                statusCode:200,
                message:'Login Successful',
                currentUser:currentUser
            }
        }else{
            return{
                status:false,
                statusCode:400,
                message:'invalid userdetails'                }
        }
    })
}


// register

const register=(username,password,number)=>{
    return db.userregister.findOne({username})
        .then(user=>{
            if(user){
                return{
                    status:false,
                    statusCode:404,
                    message:'User Already Register'
                }
            }else{
                const newUser=new db.userlogin({
                    username:username,
                    password:password,
                    number:number

                })
                newUser.save();

                return{
                    status:true,
                    statusCode:200,
                    message:'register Successfull'
                }
            }
        })
    }


        const deletedownload=(id)=>
        {
          return db.downloads.deleteOne({id}).then(
            (result)=>
            {
                if(result)
                {
                    return{
                         status:true,
                         statusCode:200,
                         message:"Game deleted"
                    }
                }

                else{
                    return{
                        status:false,
                        statusCode:404,
                        message:"Your downloads is empty"   
                }
            }
          })
        
        }

module.exports = {
    getProducts,
    paid,
    free,
    addtodownloads,
    getdownloads,
    login,
    register,
    deletedownload
}