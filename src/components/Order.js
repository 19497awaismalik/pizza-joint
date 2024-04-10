import React, { useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion'
const Order = ({ pizza,setshowModal }) => {

const containerVariant={
  hidden:{
    x:"100vw",
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{
    mass:0.2,
    damping:8,
    when:"beforeChildren",
    staggerChildren:2
    }
  },
  exit:{
    x:-1000
  }
 }
const childVariant={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}
const [showTitle, setshowTitle] = useState(true);
setTimeout(() => {
  setshowTitle(false);
}, 4000);

useEffect(()=>{
  setTimeout(() => {
   setshowModal(true)
  }, 4000);
  },[setshowModal])
  return (
    <motion.div className="container order"
    variants={containerVariant}
    initial="hidden"
    animate="visible"
    exit={"exit"} >
   <AnimatePresence>
   {showTitle &&
      <motion.h2
      exit={{y:"-100vh",}}>Thank you for your order :)</motion.h2>
      
     }
   </AnimatePresence>
      <motion.p variants={childVariant}>You ordered a {pizza.base} pizza with:</motion.p>
    <motion.div variants={childVariant}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </motion.div>
    </motion.div>
  )
}

export default Order;