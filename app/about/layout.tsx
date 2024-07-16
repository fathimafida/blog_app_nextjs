import React from 'react'
import { Interface } from 'readline/promises'

const Aboutlayout = (
    { children }: AboutlayoutProps
) => {
  return (
      <div className='flex w-full h-full '>
          <div className='w-40 h-screen bg-white'>ooooi
              
          </div>
          <div>
              {children}
          </div>
      </div>
  )
}

interface AboutlayoutProps {
  children: React.ReactNode
}

export default Aboutlayout