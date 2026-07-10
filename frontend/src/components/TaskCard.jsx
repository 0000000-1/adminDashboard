import React from 'react'

const TaskCard = () => {
  return (
    <div>
      <form action="">
        <label for='title' className='pr-4'>title</label>
        <input className='bg-white border text-xs px-2 py-1' id='title' type='input' name='title' placeholder='enter your task...' />
        <label for='title' className='pr-4'>Priority</label>
        <input className='bg-white border text-xs px-2 py-1' id='title' type='input' name='title' placeholder='enter your task...' />
        <label for='title' className='pr-4'>isComplete</label>
        <input className='bg-white border text-xs px-2 py-1' id='title' type='input' name='title' placeholder='enter your task...' />
      </form>
    </div>
  )
}

export default TaskCard