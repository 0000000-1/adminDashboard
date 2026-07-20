import Task from '../models/Task.js'
export const getTasks = async (req,res) =>{
    try {
        const AllTasks = await Task.find()
        if (!AllTasks) {
            return res.status(200).json({message:"we need proper enteries"})
        }
        
        res.status(200).json({tasks:AllTasks})
        // console.log('working bitch')
    } catch (error) {
       return res.status(500).json({error:error.message})
    }
}
export const createTasks = async (req,res) =>{
try {
    const {title, priority, isCompleted} = req.body
        const createdUser = await Task.create({
            title:title,
            priority:priority,
            isCompleted:isCompleted || 'false'
        })
        res.status(201).json(createdUser);
    //    return createdUser()
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
export const deleteTasks = async (req,res) =>{
    try {
        const {id} = req.params
        const deletedTask = await Task.findByIdAndDelete(id)
        if (!deletedTask) {
            return res.status(404).json({message:"we can't find the task"})
        }
        
        res.status(200).json({tasks:deletedTask})
        // console.log('working bitch')
    } catch (error) {
       return res.status(500).json({error:error.message})
    }
}
export const updateTasks = async (req,res) =>{
try {
    const {id} = req.params
    const {title, priority, isCompleted} = req.body

    const UpdatedUser = await Task.updateOne({
        title, priority, isCompleted
    })
    
    if(!UpdatedUser){
       return res.status(200).json({message:"we can't update the task"})
    }
        res.status(201).json(UpdatedUser);
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
