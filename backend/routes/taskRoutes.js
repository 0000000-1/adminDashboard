import express from 'express'
import {Router} from 'express'
import { createTasks, deleteTasks, getTasks, updateTasks } from '../controllers/taskcontrollers.js'

const router = express.Router()

// router.route('/create').post(createTasks)
router.get('/get', getTasks)
router.post('/create', createTasks)
router.put('/update/:id', updateTasks)
router.delete('/delete/:id', deleteTasks)

//url http://localhost:2023/api/v1/users/get
export default router