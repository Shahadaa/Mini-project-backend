const express =require("express");
const { signup, Login } = require("../Controllers/UserController");
const router=express.Router();
const userAuth = require("../Middleware/userAuth");
const { default: Header } = require("../../frontend/src/components/User/Header/Header");
router.post("/Signup",signup);
router.post("/login",Login);

router.get('/',userAuth,Header);



module.exports=router