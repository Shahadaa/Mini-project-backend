const express =require("express");
const { signup } = require("../Controllers/UserController");
const router=express.Router();
router.post('/signup',signup);


module.exports=router