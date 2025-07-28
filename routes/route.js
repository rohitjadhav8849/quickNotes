import express from "express";
import Note from "../models/schema.js";
const router = express.Router();

router.post("/notes",async (req,res,next)=>{
  try{
    let {title,Content} =req.body;
    let newNote = new Note({title,Content});
    await newNote.save();
    res.status(201).json({message:"new note added",note:newNote});
  }
  catch(err){
      next(err);
      res.status(500).json({error:err});
  }
})


router.get("/notes",async(req,res,next)=>{
  try{
    let notes= await Note.find();
    res.status(200).json(notes);
  }
  catch(err){
     next(err);
     res.status(404).json({error:err});
  }
})


router.delete("/notes/:id",async(req,res,next)=>{
  try{
      let {id}=req.params;
      await Note.findByIdAndDelete(id);
      res.status(200).json({message:"Note Delated"});
  }
  catch(err){
    next(err);
     res.status(404).json({error:err});
  }
})

router.put("/notes/:id",async(reeq,res,next)=>{
  try{
    let {id}=req.params;
    let {title,content}=req.body;
    let updateNote=await Note.findByIdAndUpdate(id,{title,content},{new:true});
    res.status(200).json({message:"Note updated",note:updateNote});
  }
  catch(err){
    next(err);
    res.status(404).json({error:err});
  }
})

export default router;