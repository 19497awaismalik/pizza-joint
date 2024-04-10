import React from 'react';
import { Link } from 'react-router-dom';
import {motion}  from 'framer-motion'
const Toppings = ({ addTopping, pizza }) => {

  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
  const spanVariant={
    hover:{
      scale:1.5,
      color:"#f8e112",
      originX:0,
      transition:{
        type:"spring",
        stiffness:120,
      }
    }
   }
   const buttonVariant={
    hidden:{
      x:"-100vw",
      opacity:1
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
       duration:0.5,
       type:"spring",
       stiffness:120,
      }
    },
    hover:{
      scale:1.1,

      boxShadow:"0px 0px 8px rgb(255,255,255)",
      textShadow:"0px 0px 8px rgb(255,255,255)",
      transition:{
        yoyo:Infinity,
        duration:0.3,
      
      }
    }
   }
   const containerVariant={
    hidden:{
      x:"100vw",
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      transition:{
        type:"spring",
        stiffness:120,
      }
    },
    exit:-1000
   }
 
  return (
    <motion.div className="toppings container"
    variants={containerVariant}
    initial="hidden"
    animate="visible"
    exit={"exit"}>
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)} 
            variants={spanVariant}
            whileHover={"hover"}
         
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button 
        variants={buttonVariant}
        initial="hidden"
        animate={"visible"}
        whileHover="hover"
       >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;