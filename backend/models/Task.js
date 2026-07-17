import mongoose, { model } from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        Required:true
    },
    priority: {
        type:String,
        Required:true       // 'high'||'meduim'||'low',
    },
    isCompleted:{
        type:Boolean,
        Required:false
    }
})

const Task = mongoose.model('Task',taskSchema);
export default Task