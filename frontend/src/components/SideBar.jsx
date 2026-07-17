import React from 'react'

const SideBar = () => {
  return (
    <div className="bg-lime-400 h-full flex flex-col w-full gap-4 p-4">
      <h2 className="text-2xl font-medium uppercase text-center text-white rounded">
        Category
      </h2>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-center bg-amber-100 p-2 rounded">
          High
        </span>
        <span className="uppercase text-center bg-amber-100 p-2 rounded">
          Medium
        </span>
        <span className="uppercase text-center bg-amber-100 p-2 rounded">
          Low
        </span>
      </div>
    </div>
  )
}

export default SideBar
