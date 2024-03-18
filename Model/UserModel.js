const mongoose=require("mongoose");
const bcypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },  
    verfied:{
        type: Boolean,
        default:false
    },
    phoneNumber :{
        type:Number,
        required:true,

    },
    blockStatus:{
       type:Boolean,
       default:false,
    },
    image:{
        type: Object,
    },
    
});

userSchema.pre("save",async function (next){
    const salt = await bcypt.genSalt();
    this.password=await bcypt.hash(this.password,salt);
});

module.exports = new mongoose.model("user",userSchema);
