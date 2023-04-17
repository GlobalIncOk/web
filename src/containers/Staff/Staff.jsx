import React from 'react'
import { StaffCard, StaffTitle } from '../../components'
import '../../styles/Staff.sass'

const Staff = () => {
  return (
    <div className='staff-container'>
      <StaffTitle />
      <StaffCard />
    </div>
  )
}

export default Staff
