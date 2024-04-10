import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Loader from './Loader';
const Home = () => {
const buttonVariant={
  hover:{
    scale:1.1,
    boxShadow:"0px 0px 8px rgb(255,255,255)",
    textShadow:"0px 0px 8px rgb(255,255,255)",
    transition:{
      yoyo:Infinity,
      duration:0.3
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
  stiffnes:120
    }
  },
  exit:{
    x:"-100vw",

  }
 }
  return (
    <motion.div className="home container" 
    variants={containerVariant}
    initial="hidden"
    animate="visible"
    exit={"exit"}>
      <h2> 
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button 
        variants={buttonVariant}
         whileHover={"hover"}
         >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;