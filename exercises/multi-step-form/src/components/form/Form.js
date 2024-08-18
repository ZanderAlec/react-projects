import React from 'react'
import '../form/Form.css'

export default function Form({steps, currStep}) {

  return (

    <div className='form-container'>
        <h2 className='form-title'>
           {steps[currStep].title}
        </h2>

        <form>
           
            {currStep === 0 && 
            
                <div className='input-box'>
                    <label className='label' for="">Username</label>
                    <input className="input" type="name" name="" value=""/>
                </div>
            }

            {currStep === 1 && 
                <div className='input-box'>
                    <label className='label' for="">Email</label>
                    <input className="input" type="email" name="" value=""/>
                </div>
            }

            {currStep === 2 && 

                <>
                    <div className='input-box'>
                        <label className='label' for="">Password</label>
                        <input className="input" type="password" name="" value=""/>
                    </div>

                    <div className='input-box'>
                        <label className='label' for="">Confirm Password</label>
                        <input className="input" type="password" name="" value=""/>
                    </div>
                </>
            }
            
        </form>
        
    </div>

  )
}
