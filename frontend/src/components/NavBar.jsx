import React, { useState } from 'react'

const NavBar = () => {

    const [isLogin, setIsLogin] = useState(false)


    return (
        <div className='bg-blue-300 flex justify-between p-4 align-center'>
            <div>
                <h1 className='text-3xl text-red-500 font-bold'>TASKBar</h1>
            </div>
            <div className='justify-center flex align-center '>
                <search className='w-fit h-full '>
                    <form className='bg-amber-100 p-2 rounded-2xl flex items-center gap-6 px-6 text-sm' action='/search-results' method='get'>
                        <label for='task-search' className='pr-4'>Search Task</label>
                        <input className='bg-white border text-xs px-2 py-1' id='task-search' type='search' name='q' placeholder='Type to Search...' />
                        <button type='submit'>Search</button>
                    </form>
                </search>
            </div>
            <div className='bg-gray-200 rounded-full items-center flex'>
                <p className='text-sm px-2'>{isLogin ? "welcome User" : "Login"}</p>
            </div>
        </div>
    )
}

export default NavBar