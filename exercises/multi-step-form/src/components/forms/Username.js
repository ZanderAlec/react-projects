import React from 'react'
import './Form.css'

export default function Username({nextStep}) {
  return (
    <form>
        <div className='input-box'>
            <label className='label' for="">Username</label>
            <input className="input" type="name" name="" value=""/>
        </div>

        <div className='flex justify-end'>
          <button 
            onClick={() => nextStep()}
            className='bttm bttm-next'
          >Next</button>
        </div>
    </form>
  )
}
