import React from 'react'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{y:'-90vh'}}
    animate={{y:"0"}}
    exit={{y: '100vh'}}
    >
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </motion.div>
  )
}

export default About
