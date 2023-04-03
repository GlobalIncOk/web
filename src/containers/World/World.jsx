import React from 'react'
import { WorldCard ,WorldTitle } from '../../components'
import '../../styles/World.sass'

const World = () => {
  return (
    <div className='world-container'>
      <div className='world-layout'>
        <WorldCard />
        <WorldTitle />
      </div>
    </div>
  )
}

export default World
