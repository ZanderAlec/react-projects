import React, { useEffect, useState } from 'react'
import Step from "./step/Step"
import './step/Step.css'

export default function StepList({stepsNum, currStep}) {

    const [steps, setSteps] = useState([]);

    useEffect(()=>{

        const temp = [];
        for(let i = 0; i < stepsNum; i++){
            temp.push(

                <Step 
                    index = {i + 1} 
                    style = {`step ${i <= currStep && "step-checked"}`}
                    />    
            );
        }

        setSteps([...temp]);
    }, [stepsNum, currStep]);

  return (
    <div className=" step-list">
        {
            steps.map((value) => {
                return value;
            })
        }

    </div>
  )
}
