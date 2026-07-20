import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import api from '../lib/axios'


const TaskCard = () => {
  const [taskNote, setTaskNote] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/v1/users/get')
        const data = response.data.tasks || []
        setTaskNote(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, []) // run once on mount

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/users/delete/${id}`)
      console.log('sucessfully deleted by client side')
      // // FIXED: Filter out the deleted task from state to update the UI instantly
      // setTaskNote((prevTasks) => prevTasks.filter(task => task._id !== id));
      // console.log('Successfully deleted by client side');

    } catch (error) {
      console.log('error on deleting task from client side')
    }
  }

  const handleUpdate = async () => {
    console.log('update handle');

  }

  return (
    <div>
      {loading ? (
        <span className="text-gray-500 text-base font-medium text-center md:text-lg py-4 px-6 rounded-2xl">
          There is no task, create one for me bro
        </span>
      ) : (
        <div className="grid grid-cols-4 gap-3 p-4">
          {taskNote.map((task) => (
            <div
              key={task._id || task.id}
              className={`flex flex-col gap-7 w-full h-full py-4 px-6 rounded-2xl justify-between font-medium text-base ${task.priority === 'high' ? 'bg-red-300' : task.priority === 'medium' ? 'bg-yellow-300' : ' bg-green-400 '} `}>
              <span>{task.title}</span>
              <div className="flex gap-4 justify-between">
                <p>{task.priority}</p>
                <p>{task.isCompleted ? '✅' : '❌'}</p>
                <input type="checkbox" name="" id="" />
                <div className='flex gap-3'>
                  <button onClick={() => {handleUpdate (task._id)}} className='text-white text-base font-medium md:text-lg'>upd</button>
                  <button onClick={() => {handleDelete (task._id)}}  className='text-white text-base font-medium md:text-lg'>del</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskCard
