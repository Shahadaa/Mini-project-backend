const AdminModel = require("../Model/AdminModel");
const jwt = require('jsonwebtoken');
 const createToken=(userId)=>{
    const token=jwt.sign({userId},
    "JWT",{expiresIn:'1h'});
    return token;
 }
 module.exports.Login = async (req, res, next) => {
    console.log(req.body, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    const { userName, password } = req.body;
    try {
        const user = await AdminModel.findOne({ userName: userName });
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

