const Admin = require("../models/Admin.model")
const adminSchema = require("./Validation/admin.validation")



const jwt = require("jsonwebtoken")


const sigToken = (id,name)=>{
    return jwt.sign({id,name},process.env.SCREET_KEY,{expiresIn:"7d"});
};




const loginUser = async (req , res)=>{

    try{

        const {email , password}= req.body;
        const user = await Admin.findOne({email});
        if(!user){
            return res.status(400).json({message:"your email is not found you need to registar"})
        }

        const chackPass = await bcrypt.compare(password, user.password);
        if(!chackPass){
            return res.status(400).json({message:"invalid pasword"})
        };

        const token = createtoken(user._id, user.name, user.role)
        res.json({message:"user login sucessufly",user , token});

    }

    catch(err){
        res.status(500).json({message:err.message})
    }
}