import Task from '../models/Task.js'
export const getTasks = async (req,res) =>{
    try {
        const AllTasks = await Task.find()
        if (!AllTasks) {
            return res.status(200).json({message:"we need proper enteries"})
        }
        
        res.status(200).json({tasks:AllTasks})
        console.log('working bitch')
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
            isCompleted:isCompleted || 'no'
        })
        res.status(201).json(createdUser);
    //    return createdUser()
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
