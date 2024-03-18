const express =require("express");
const { signup } = require("../../frontend/src/Services/userApi");
const router=express.Router();
router.post('/signup');