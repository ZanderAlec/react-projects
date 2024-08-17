import React from 'react'

export default function Form({steps, currStep}) {

  return (

    <div>
        <h2>
           {steps[currStep].title}
        </h2>

        <form>
           
            {currStep === 0 && 
            
                <div>
                    <label for="">Username</label>
                    <input type="name" name="" value=""/>
                </div>
            }

            {currStep === 1 && 
                <div>
                    <label for="">Email</label>
                    <input type="email" name="" value=""/>
                </div>
            }

            {currStep === 2 && 

                <>
                    <div>
                        <label for="">Password</label>
                        <input type="password" name="" value=""/>
                    </div>

                    <div>
                        <label for="">Confirm Password</label>
                        <input type="password" name="" value=""/>
                    </div>
                </>
            }
            
        </form>
        
    </div>

  )
}
