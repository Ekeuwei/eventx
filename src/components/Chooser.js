import React from 'react'
import { useHistory } from 'react-router-dom'

const Chooser = () => {
    const history = useHistory();
  return (
    <div className='chooser text-center'>
        <h1>Where are you heading?</h1>
        <div className="btn" onClick={()=> history.push('/event/planner')}>Event Planner</div>
        <div className="btn" onClick={()=> history.push('/booking')}>Event Booking</div>
    </div>
  )
}

export default Chooser