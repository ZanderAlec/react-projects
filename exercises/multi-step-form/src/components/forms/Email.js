import React from 'react'
import './Form.css'



export default function Email({previousStep, nextStep}) {
  return (
    <form>
        <div className='input-box'>
            <label className='label' for="">Email</label>
            <input className="input" type="email" name="" value=""/>
        </div>

        <div className='flex'>
          <button 
              onClick={() => previousStep()}
              className='bttm bttm-previous'
            >Previous</button>

          <button 
            onClick={() => nextStep()}
            className='bttm bttm-next'
          >Next</button>
        </div>
    </form>
  )
}
