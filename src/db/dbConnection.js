const mongooes=require("mongoose");
const config= require("../config/config");
const connectDB=async() => {
    mongooes
    .connect(config.mongodb.url,config.mongodb.opetions)
    .then((data)=>{
        console.log("database connection successfullyyy!");
    })
    .catch((error)=>{
        console.log("database connection error: ",error);
    });
};
module.exports={connectDB};