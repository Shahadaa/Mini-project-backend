const express = require("express");
const cors =require("cors")
const dbconnection=require("./Config/dbconnection");
const app=express();
//const AdminRoutes=require("./Routes/AdminRoutes");
const UserRoutes=require("./Routes/UserRoutes");
  dbconnection.dbConnect();
const PORT =8000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors())
app.use("/",UserRoutes);
//app.use("/Admin",AdminRoutes)

app.listen(8000,() =>{
    console.log(`server started at port ${PORT}`);
})
