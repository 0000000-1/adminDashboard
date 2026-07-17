import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
              className={`flex gap-7 w-full h-full py-4 px-6 rounded-2xl justify-between font-medium text-base ${task.priority==='high' ? 'bg-red-300' : task.priority === 'medium' ? 'bg-yellow-300' : ' bg-green-400 '} `}>
              <span>{task.title}</span>
              <div className="flex gap-4">
                <p>{task.priority}</p>
                <p>{task.isCompleted ? '✅' : '❌'}</p>
                <input type="checkbox" name="" id="" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskCard
