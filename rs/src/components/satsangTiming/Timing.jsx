import React from 'react'
import './Timing.css'
import Timer from '../timerlogic/Timer';
// import { Link } from 'react-router-dom';
function Timing() {
    const sundayTargetDate = new Date('2024-01-28T09:30:00'); // Set your Sunday target date and time
    const amavasyaTargetDate = new Date('2024-02-11T10:00:00'); // Set your Amavasya target date and time
    const pournimaTargetDate = new Date('2024-02-26T10:00:00'); // Set your Pournima target date and time
  
  return (
    <>
     <div className="satsang-timing">
      <h2>Upcoming Satsang </h2>

      <div className="timing-item">
        <h3>Every Sunday</h3>
        <Timer targetDate={sundayTargetDate} elementId="sundayTimer" />
        <p id="sunday"></p>
        <p>Timing: 09:30 AM</p>
      </div>

      <div className="timing-item">
      {/* <Link to="AmavasyaPage"> */}
          <h3>Amavasya Satsang</h3>
          <Timer targetDate={amavasyaTargetDate} elementId="amavasyaTimer" />
          <p id="amavasya"></p>
          <p>Timing: 10:00 AM</p>
          {/* </Link> */}
      </div>

      <div className="timing-item">
        {/* <Link to="pournima"> */}
          <h3>Pournima Satsang</h3>
          <Timer targetDate={pournimaTargetDate} elementId="pournimaTimer" />
          <p id="pournima"></p>
          <p>Timing: 10:00 AM</p>
          {/* </Link> */}
      </div>
    </div>
    </>
  )
}

export default Timing