import React from 'react'
import TaskCard from '../components/TaskCard'
import { Link } from 'react-router'
import SideBar from '../components/SideBar'

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
      <div className='h-full grid grid-cols-5 gap-4 m-4'>
        <div className='col-span-1'>
          <SideBar />
        </div>
        <div className='col-span-4'>
          <TaskCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard