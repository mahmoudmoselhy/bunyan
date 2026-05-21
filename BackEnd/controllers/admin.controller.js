const Admin = require("../models/Admin.model")
const adminSchema = require("./Validation/admin.validation")



const jwt = require("jsonwebtoken")


const sigToken = (id,name)=>{
    return jwt.sign({id,name},process.env.SCREET_KEY,{expiresIn:"7d"});
};