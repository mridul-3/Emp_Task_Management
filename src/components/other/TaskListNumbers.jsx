import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className='w-[40%] bg-blue-600 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
        </div>
        <div className='w-[40%] bg-green-400 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Completed</h3>
        </div>
        <div className='w-[40%] bg-yellow-200 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Accepted</h3>
        </div>
        <div className='w-[40%] bg-red-400 rounded-xl py-6 px-9'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers 