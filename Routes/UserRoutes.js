const express =require("express");
const { signup, Login } = require("../Controllers/UserController");
const router=express.Router();
router.post("/Signup",signup);
router.post("/login",Login);


module.exports=router