import { useCycle } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
const Loader = () => {
  const LoaderVariant={ 
  animationOne:{
     x:[-20,20],
     y:[0,-30],
    transition:{
      x:{
        yoyo:Infinity,
        duration:0.5,
      },   
      y:{
        yoyo:Infinity,
        duration:0.25,
       },
     
   }
  },
  
   animationTwo:{
      y:[0,-40],
      x:0,
      transition:{
       y:{
        yoyo:Infinity,
        duration:0.25,
        ease:"easeInOut"
       }
      }
    }
  
}
   let [animation,cycleAnimation]= useCycle("animationOne","animationTwo");
  return (
    <div>
      <motion.div className='loader' variants={LoaderVariant} animate={animation}></motion.div>
      <div className='cycle_loader' onClick={()=>cycleAnimation()}>Cycle Loader</div>
    </div>
  )
}

export default Loader
