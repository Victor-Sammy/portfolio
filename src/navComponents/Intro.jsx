/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { GrMail } from 'react-icons/gr'
import './styles.css'
//import fractalTree from '../components/fractal-tree'
//import useFractalTree from '../components/fractal-tree'
import FractalTree from '../components/fractal-tree'
//import { useRef, StrictMode, useEffect } from 'react'
// import p5 from 'p5'

const Intro = () => {
  //   const sketchRef = useRef(null)

  //   //sketchRef.current = new p5(useFractalTree, 'sketch-container')

  //   useEffect(() => {
  //     sketchRef.current = new p5(useFractalTree, 'sketch-container')
  //     return () => {
  //       setTimeout(() => {
  //         sketchRef.current.remove()
  //       }, 500)
  //     }
  //   }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='mb-28 pt-2'
    >
      <div className='contain w-full text-center leading-8 xs:-translate-y-28 sm:-translate-y-0'>
        <div className='w-full h-1/2 flex justify-center xs:scale-75 md:scale-100'>
          <FractalTree />
        </div>
        <div className='w-full xs:-translate-y-14 sm:-translate-y-0'>
          <h1
            className='text-[#ccd6f6] xs:text-[2.8rem] sm:text-[5rem] lg:text-[6.5rem] xl:text-[5.8rem] 2xl:text-[5.5rem]sm: mt-8'
            id='text'
          >
            hi, <span className='text-[#00FFFF] font-semibold'>victor</span>{' '}
            here.
          </h1>
          <h2 className='text-[#8892b0] xs:text-[1.8rem] sm:text-[3.2rem] lg:text-[4.5rem] xl:text-[3.5rem] 2xl:text-[3.5rem] mb-8 mt-3'>
            I innovate with code.
          </h2>
        </div>
      </div>
      <p className='text-[#8892b0] xs:w-full md:px-[15%] lg:px-[15%] xs:text-[1.1rem] sm:text-[1.4rem] lg:text-[2rem] xl:text-[1.5rem] xs:-translate-y-48 sm:-translate-y-0 xs:leading-7 sm:leading-10 tracking-wide text-center'>
        I am a software developer who is proactive about constructing digital
        solutions that solve complex problems and have deep interest in
        full-stack development, artificial intelligence, human-computer
        interactions, and everything it entails.{' '}
      </p>
      <a
        href='mailto:victorsammy1997@gmail.com'
        className='flex items-center justify-center gap-3 mt-10 font-medium rounded-lg border-2 border-[#00FFFF] xs:w-[34%] sm:w-[20%] lg:w-[18%] xs:ml-[30%] sm:ml-[37%] lg:ml-[41%] xs:h-16 sm:h-20 text-[#00FFFF] hover:bg-blue-950 cursor-pointer hover:text-gray-300 xs:-translate-y-52 sm:-translate-y-0'
      >
        <span className='xs:text-[1.4rem] sm:text-[1.8rem]'>
          <GrMail />
        </span>
        <p className='xs:text-[1.2rem] sm:text-[1.4rem]'>Say hi!</p>
      </a>
    </motion.div>
  )
}

export default Intro
