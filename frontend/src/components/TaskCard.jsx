import React, { useEffect, useState } from 'react'
import api from '../lib/axios.js'
import axios from 'axios'

const TaskCard = () => {
  const [taskNote, setTaskNote] = useState([]) // put all task in it
  const [loading, setLoading] = useState(true)

  const fetch = async () => {
    try {
      const response = await axios.get('/api/v1/users/get');
      const data = response.data.tasks
      setTaskNote(data)
      setLoading(false)

    } catch (error) {
      console.error(error)
    }
  }
  fetch()

  return (
    <div>
      {
        loading ?
          <><span className='text-gray-500 text-base font-medium text-center md:text-lg'>their is no task create one for me bro</span ></>
          : <>
            <div className='h-full w-full m-4 grid-cols-4 grid gap-3'>
              {taskNote.flatMap((task, _id) => (
                <div key={_id} className='bg-amber-200 flex gap-7 w-full h-full py-4 px-6 rounded-2xl justify-between font-medium text-base'>
                  <span className='h-auto'> {task.title}</span>
                  <div className='flex gap-4'>
                    <p>{task.priority}</p>
                    <p>{task.isCompleted ? "✅" : "❌"}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
      }
    </div>
  )

}


export default TaskCard