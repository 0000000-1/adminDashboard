import React from 'react'
import  TaskCard  from '../components/TaskCard'
import { Link } from 'react-router'

const Dashboard = () => {

  return (
    <div className='h-full w-full flex justify-center items-center flex-col'>
      <div className='flex justify-between bg-blue-700 w-full h-14 items-center'>
        <div className='mx-6 py-2 '>
          <h3 className='text-white text-base font-medium md:text-lg'>Cards</h3>
        </div>
        <div className='mx-6 py-2'>
          <Link to={'/create'}>
            <p className='text-white text-base font-medium md:text-lg'>Create  +</p>
          </Link>
        </div>
      </div>
      <div className='h-full flex justify-center flex-1 flex-col items-center px-4 py-8 mb-12 '>
        <TaskCard />
      </div>
    </div>
  )
}

export default Dashboard