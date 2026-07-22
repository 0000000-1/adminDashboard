import React, { useEffect, useState } from 'react'
import TaskCard from '../components/TaskCard'
import { Link } from 'react-router'
import SideBar from '../components/SideBar'
import api from '../lib/axios'


const Dashboard = () => {

  const [filter, setFilter] = useState('All Task')
  const [fetch, setFetch] = useState('')

  useEffect( ()=>{
    const fetchedData = async () =>{
      try {
       const response = await api.get('/api/v1/users/get')
      setFetch(response)
      console.log('data fetched successfully in dashboard');
    } catch (error) {
      console.log(error);
    }
  } 
})

  return (
    <div className='h-full w-full flex justify-center items-center flex-col'>
      <div className='flex justify-between bg-blue-700 w-full h-auto items-center'>
        <div className='mx-6 py-2 '>
          <h3 className='text-white text-base font-medium md:text-lg'>Cards</h3>
        </div>
        <div className='mx-6 py-2'>
          <Link to={'/create'}>
            <p className='text-white text-base font-medium md:text-lg'>Create  +</p>
          </Link>
        </div>
      </div>
      <div className='flex-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4'>
        <div className='hidden w-full sm:block md:flex col-span-1 '>
          <SideBar />
        </div>
        <div className='md:col-span-2 sm:col-span-1 lg:col-span-3 xl:col-span-4 col-span-1'>
          <TaskCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard