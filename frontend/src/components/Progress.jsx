import React from 'react'

const Progress = ({progess=0, total=5, color, bgColor}) => {
  return (
    <div className='flex gap-1.5'>
        {[...Array(total)].map((_,index)=>(
            <div key={index} className={`w-2 h-2 rounded transition-all ${index < progess? 'bg-cyan-500':'bg-cyan-100'}`} 
            style={{
                backgroundColor:
                    index<progess
                    ? color || 'rgba(1,1,1,1)'
                    : bgColor || 'rgba(1,1,1,0.1)'
            }}></div>
        ))}
      
    </div>
  )
}

export default Progress
