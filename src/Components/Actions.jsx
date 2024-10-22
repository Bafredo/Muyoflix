import React from 'react'
const Actions = () => {
  const like = "Like me";
  const shre = "Share me";
  const comment = "Comment me";
  return (
    <div className=''>
      <div className='gap-2'>
        <button className='p-4 bg-blue-600 rounded shadow-lg m-1 '>Like</button>
        <button className='p-4 bg-blue-600 rounded shadow-lg m-1 '>Share </button>
      </div>
      <div>
        <button className='p-4 bg-blue-600 rounded shadow-lg m-1 '>Leave a comment</button>
      </div>
    </div>    
  )
}
export default Actions