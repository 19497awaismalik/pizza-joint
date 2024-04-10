import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
import {Link} from "react-router-dom"
const Modal = ({showModal}) => {
    const modalVariant={
        hidden:{
            y:-1000,
        },
        visible:{
            y:200,
            transition:{
                duration:0.3,
                type:"spring",
                stiffness:150,
            }
        },
        exit:{
            y:"-100vh",
            ease:"easeInOut",
            duration:1
            
        }
    }
  return (
    <div>
    <AnimatePresence exitBeforeEnter >

      {showModal && <div className=' backdrop'>
       <motion.div className='main_modal'
       variants={modalVariant}
       initial="hidden"
       animate={"visible"}
        exit="exit"
       >
       <p>Want to make another pizza?</p>
       <Link to="/"><button>Start Again</button></Link>
       </motion.div>

        </div>}
    </AnimatePresence>
    </div>
  )
}

export default Modal
