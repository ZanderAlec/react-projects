import React, { useEffect, useState } from 'react'
import Step from './Step';

export default function StepList({stepsNum, currStep}) {

    const [steps, setSteps] = useState([]);

    useEffect(()=>{

        const temp = [];
        for(let i = 0; i < stepsNum; i++){
            temp.push(

                <Step 
                    num = {i + 1} 
                    checked = {i <= currStep && true}
                    />    
            );
        }

        setSteps([...temp]);
    }, [stepsNum, currStep]);

  return (
    <div>
        {
            steps.map((value) => {
                return value;
            })
        }

    </div>
  )
}
