import React from 'react'
import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router'
import api from '../lib/axios.js'


const TaskForm = () => {

  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("low")
  const [isCompleted, setIsCompleted] = useState(false)

  // const savedData = localStorage.getItem()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await api.post('/api/v1/users/create', {
        title, priority, isCompleted
      })

      alert('creating done')
      // Navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className=' flex justify-center items-center h-screen w-full text-base font-medium '>
      <form onSubmit={handleSubmit} className='relative flex w-fit h-auto bg-amber-200 flex-col p-6 items-center rounded' >
        <div className='absolute top-4 left-4'>
          <Link to={'/'} className='text-amber-600 hover:text-yellow-800 text-sm font-medium flex items-center gap-1'>
            ← Back
          </Link>
        </div>
        <h1 className='m-6 text-2xl text-gray-700'>CREATE TASK</h1>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between'>
            <label for='title' className='pr-4'>Title :</label>
            <input className='bg-white text-xs px-2 py-1 border rounded' onChange={(e) => setTitle(e.target.value)} value={title} id='title' type='input' name='title' placeholder='enter your title...' />
          </div>
          <div className='flex justify-between'>
            <label for='priority' className='pr-4'>Priority :</label>
            <select onChange={(e) => setPriority(e.target.value)} value={priority} name='priority' className='border rounded text-sm'>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
            {/* <input className='bg-white border text-xs px-2 py-1' value={priority} id='priority' type='input' name='title' placeholder='high, medium, low' /> */}
          </div>
          <div className='flex justify-between'>
            <label for='isCompleted' className='pr-4'>Complete :</label>
            <input 
            className='bg-white border text-xs px-2 py-1 rounded' 
            onChange={(e) => setIsCompleted(e.target.checked)} 
            checked={isCompleted} 
            id='isCompleted' 
            type="checkbox" 
            name='title' 
            placeholder='not yet' />
          </div>
        </div>
        <button className='border bg-gray-200 w-fit px-4 my-6 py-1 rounded'>
          Submit
        </button>
      </form>
    </div>
  )
}


export default TaskForm