require('dotenv').config();
require('express-async-errors');
const path=require('path');
const express=require('express');
const app=express();
const db=require(path.join(__dirname,'models','index.js'));
const notFound=require(path.join(__dirname,'middlewares','notFound.js'));
const mainRouter=require(path.join(__dirname,'routes'));
const corsOptions=require(path.join(__dirname,'config','corsOptions.js'));
const cors=require('cors');


app.use(express.json());
app.use(cors(corsOptions));
app.use('/',mainRouter);
app.use(notFound);


const PORT=process.env.SERVER_PORT||3500;
db.sequelize.sync().then(()=>{
    console.log('Connnected to the dataBase');
    app.listen(PORT,()=>console.log(`Server is running on port ${PORT} ... `));

}).catch((error)=>{
    console.log(error);
});
