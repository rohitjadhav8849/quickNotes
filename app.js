import express from "express"
import mongoose from "mongoose"
import noteroutes from "./routes/route.js";

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/quickNotes");
}
main()
.then((res)=>{ 
  console.log("Connection Successfull");
})
.catch((err)=>{ 
  console.log(err);
})


const app=express();
app.listen(8080,()=>{
  console.log("we are listining to port 8080");
})
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",noteroutes);

app.use((err,req,res,next)=>{
  console.log(err);
  res.status(404).json({error:err});
})