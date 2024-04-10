import React from 'react';
import {motion} from 'framer-motion'
const Header = () => {
  const containerVariant={
    hidden:{
      opacity:0,
      y:"-100vh"
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.3,
        type:"spring",
        stiffness:100
      }
    }
  }
  const SVGVariant={
    hidden:{
      rotate:-180,
      opacity:0
    },
    visible:{
      rotate:0,
      opacity:1,
      transition:{
        duration:2
      }
    }
  }
  const pathVariant={
    hidden:{
      pathLength:0
    },
    visible:{
      pathLength:1,
      transition:{
        duration:2
      }
    }
  }
  return (
    <header>
      <div className="logo">
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" 
        variants={SVGVariant}
       initial="hidden"
       animate={"visible"}
       drag
       dragConstraints={{top:0,left:0,right:0,bottom:0}}
       dragElastic={0.5}
        >
          <motion.path 
              variants={pathVariant}

            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div className="title" 
      variants={containerVariant}
      initial="hidden"
      animate={"visible"}
     >
        <h1 >Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;