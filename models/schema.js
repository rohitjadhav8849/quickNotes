import mongoose from "mongoose"

const noteschema=new mongoose.Schema({
  title:String,
  Content:String,
  createdAt:{
    type: Date,
    default: Date.now,
  },
})
const Note =mongoose.model('Note',noteschema);
export default Note;