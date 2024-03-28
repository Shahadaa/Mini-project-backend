const UserModel = require("../Model/UserModel");
const jwt = require('jsonwebtoken');
 const createToken=(userId)=>{
    const token=jwt.sign({userId},
    "JWT",{expiresIn:'1h'});
    return token;
 }
module.exports.signup=async(req,res,next) =>{
console.log(req.body,"%%%%%%%%%%%%%%%%%%%%%%%")
const{email,password,username}=req.body;
    try{
        const emailExist=await UserModel.findOne({email:email});
        if (emailExist){
            return res.json({message:"Email already exists",status:false});
        }
        const newUser=new UserModel({
            userName:username,
            email:email,
            password:password,
        })
        const userDetails= await (newUser.save());
        const token= createToken(UserModel._id);
        return res.json({
            message:"Account created successfully",
            status:true,
            token,
        });

    } catch(error){
        console.log(error);
        return res.json({message:"Internal server in sign up",status:false})
        
    }
};
module.exports.Login = async (req, res, next) => {
    console.log(req.body, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    const { userName, password } = req.body;
    try {
        const user = await UserModel.findOne({ userName: userName });
        if (!user) {
            return res.json({ message: "User not found", status: false });
        }
 
        const token = createToken(user._id);
        return res.json({
            message: "Login successful",
            status: true,
            token,
        });
    } catch (error) {
        console.log(error);
        return res.json({ message: "Internal server error in login", status: false });
    }
};

