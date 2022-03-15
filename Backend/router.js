const express= require('express');
const app= express();
const uri=require('./path.js');
//import {ObjectId} from "bson";
const cors=require('cors');
//const ObjectId=require('mongodb').ObjectID;
//var objectId= new ObjectId();
const url= require('url');

app.use(express.json());
app.use(cors());
const Restaurants=require('./model.js');
const mongoose=require('mongoose');
const {filterRestaurant,add}=require('./controller.js');
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(client=>{
    //let db=client.db('Restaurants');
    //db.open();
    //let restaurants=db.collection('Restaurants');
    //restaurants.insertMany(data);
    app.listen(3200,()=>{
        console.log("Server and database connected");
    });
}).catch(err=>{
    console.log(err);
})
app.get('/getRes',(req,res)=>{
    Restaurants.find({}).then(result=>res.status(200).json(result)).catch(err=>console.error(err));
})
app.get('/getbyid/:id',(req,res)=>{
    //const id=new BSON.ObjectId(req.params.id);
    const id= mongoose.Types.ObjectId(req.params.id);
    Restaurants.findOne({_id:id}).then((result)=>{res.status(200).json(result);
    console.log(result);}).catch((err)=>{console.err(err)});
})
app.get('/detail/:name',(req,res)=>{
    console.log(typeof(req.params.name));
    Restaurants.find({name:{$regex:req.params.name}}).then(result=>res.json(result)).catch(err=>{
        console.error(err);
    })
    
})
app.get('/getby/mealtype/q',(req,res)=>{
    const q=url.parse(req.url,true).query;
    Restaurants.find({"type.name":{$regex:q.mealtype}}).then(result=>res.status(200).json(result)).catch(err=>console.error(err));
})
app.get('/restaurant/location/:locality',(req,res)=>{
    const locality=req.params.locality;
    Restaurants.find({city_name:{$regex:locality}}).then((result)=>res.status(200).json(result)).catch(err=>console.error(err));
})
app.get('/home/query',(req,res)=>{
    const queryObject=url.parse(req.url,true).query;
    Restaurants.find({name:{$regex:queryObject.name, $options:'i'},city_name:{$regex:queryObject.locality, $options:'i'},"type.name":{$regex:queryObject.mealtype}}).then(result=>res.json(result)).catch(err=>{
        console.error(err);
    })
})

//app.post('/add',add);
app.post('/filter',filterRestaurant);
app.post('/add',(req,res)=>{
    Restaurants.create(req.body).then(result=>res.status(200).send("Data added")).catch(err=>console.error(err));
})
