import React from 'react'
import './Form.css'


export default function Password({previousStep, nextStep}) {
  return (
    <form>
        <div className='input-box'>
            <label className='label' for="">Password</label>
            <input className="input" type="password" name="" value=""/>
        </div>

        <div className='input-box'>
            <label className='label' for="">Confirm Password</label>
            <input className="input" type="password" name="" value=""/>
        </div>

        <div className='flex'>
          <button 
              onClick={() => previousStep()}
              className='bttm bttm bttm-previous'
            >Previous</button>

          <button className='bttm bttm-next'> Finish</button>
        </div>
    </form>
  )
}
