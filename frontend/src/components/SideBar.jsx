import React from 'react'

const SideBar = () => {
  return (
    <div className="flex bg-lime-400 h-full flex-col w-full gap-4 m-4 mr-0 p-4">
      <h2 className="text-2xl font-medium uppercase text-center text-white rounded">
        Category
      </h2>
      <div className="flex flex-col gap-2">
        <button className="uppercase text-center bg-amber-100 p-2 rounded">
          All Task
        </button>
        <button className="uppercase text-center bg-amber-100 p-2 rounded">
          High
        </button>
        <button className="uppercase text-center bg-amber-100 p-2 rounded">
          Medium
        </button>
        <button className="uppercase text-center bg-amber-100 p-2 rounded">
          Low
        </button>
      </div>
    </div>
  )
}

export default SideBar
