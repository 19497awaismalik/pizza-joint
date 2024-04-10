import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Base = ({ addBase, pizza }) => {
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
  
 const spanVariant={
  hover:{
    scale:1.5,
    originX:0,
    color:"#f8e112",
    transition:{
      type:"spring",
      stiffness:120,
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
  exit:{
    x:-1000
  }
 }
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  
  
  return (
    <motion.div className="base container"
    variants={containerVariant}
    initial="hidden"
    animate="visible"
    exit={"exit"}>

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)} 
            variants={spanVariant}
            whileHover={"hover"}
          >
              <span className={spanClass}  
             
              >{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button 
            variants={buttonVariant}
              initial="hidden"
              animate={"visible"}
              whileHover="hover"
            >Next</motion.button>
          </Link>
        </div>
      )}

    </motion.div>
  )
}

export default Base;