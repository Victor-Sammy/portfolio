import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import mePhoto from '../assets/linkedIn-photo.jpeg'

const About = () => {
  const sectionRef = useRef()
  const controls = useAnimation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect()
      const isSectionVisible =
        rect.top < window.innerHeight * 0.7 && rect.bottom >= 0

      if (isSectionVisible !== isVisible) {
        setIsVisible(isSectionVisible)
      }
    }

    const handleScroll = () => {
      onScroll()
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, type: 'ease-in' },
      })
    } else {
      controls.start({
        y: 50,
        opacity: 0,
        transition: { duration: 0.7, type: 'ease-in' },
      })
    }
  }, [isVisible, controls])

  return (
    <div className='' ref={sectionRef}>
      <h1 className='text-[#ccd6f6] font-bold xs:text-[2rem] sm:text-[2.4rem] lg:text-[3rem] mb-10'>
        / about me
      </h1>
      <div className='flex xs:flex-col sm:flex-row item-start justify-between'>
        <div className='xs:w-full sm:w-[66%] md:w-[58%] xl:w-[60%] text-[#8892b0] xs:text-[1.1rem] sm:text-[1.4rem] lg:text-[1.6rem] 2xl:text-[1.5rem]'>
          <p className='mb-5'>
            I am currently a{' '}
            <span className='font-semibold'>Software Developer</span> at{' '}
            <span>
              {' '}
              <a
                className='text-[#00FFFF]'
                href='https://www.oaknetsolution.com/category/features/'
              >
                Oaknet Solution
              </a>
            </span>
            , working with the designers and developers team towards building
            amazing user experience and create solutions.
          </p>
          <p className='mb-5'>
            Here are some technologies I have been working with:
          </p>
          <div className='flex items-center gap-5 text-[1em] leading-10 mb-5'>
            <ul className='text-lg'>
              <motion.li
                className='flex items-center gap-3'
                animate={controls}
                initial={{
                  y: 150,
                  opacity: 0,
                  transitionDelay: 0.1,
                }}
              >
                <span className='text-xs text-cyan-300'>
                  <FaPlay />
                </span>{' '}
                <span className='pt-1'>React JS</span>
              </motion.li>
              <motion.li
                className='flex items-center gap-3'
                animate={controls}
                initial={{
                  y: 50,
                  opacity: 0,
                  transitionDelay: 0.2,
                }}
              >
                <span className='text-xs text-cyan-300'>
                  <FaPlay />
                </span>{' '}
                <span className='pt-1'>Vue JS</span>
              </motion.li>
              <motion.li
                className='flex items-center gap-3'
                animate={controls}
                initial={{
                  y: 50,
                  opacity: 0,
                  transitionDelay: 0.3,
                }}
              >
                <span className='text-xs text-cyan-300'>
                  <FaPlay />
                </span>{' '}
                <span className='pt-1'>Node.js</span>
              </motion.li>
            </ul>
            <ul className='text-lg'>
              <motion.li
                className='flex items-center gap-3'
                animate={controls}
                initial={{
                  y: 50,
                  opacity: 0,
                  transitionDelay: 0.4,
                }}
              >
                <span className='text-xs text-cyan-300'>
                  <FaPlay />
                </span>{' '}
                <span className='pt-1'>MongoDB</span>
              </motion.li>
              <motion.li
                className='flex items-center gap-3'
                animate={controls}
                initial={{
                  y: 50,
                  opacity: 0,
                  transitionDelay: 0.5,
                }}
              >
                <span className='text-xs text-cyan-300'>
                  <FaPlay />
                </span>{' '}
                <span className='pt-1'>HTML & CSS</span>
              </motion.li>
              <motion.li
                className='flex items-center gap-3'
                animate={controls}
                initial={{
                  y: 50,
                  opacity: 0,
                  transitionDelay: 0.6,
                }}
              >
                <span className='text-xs text-cyan-300'>
                  <FaPlay />
                </span>{' '}
                <span className='pt-1'>Figma</span>
              </motion.li>
            </ul>
          </div>
          <p>
            Outside of work I&apos;m interested in following the developments of
            science and technology. I also play video games and watch a lot of
            movies about robots.
          </p>
        </div>
        <div className='xs:hidden sm:block sm:h-[350px] lg:h-[400px] sm:w-[28%] md:w-[36%] xl:w-[34%]'>
          <img
            className='h-full w-full object-contain rounded-2xl'
            src={mePhoto}
            alt='image'
          />
        </div>
      </div>
      {/*<div className='flex mt-20 items-center'>
        <p className='text-slate-400 leading-8 tracking-wider'>
          Due to my love for robots, i created{' '}
          <span className='text-[#ADD8E6]'>Eye Robot</span> using the p5.js
          canvas library as a form of motivation, notice the revolving eyes, it
          tells me to keep going just as the world evolves non-stop.
        </p>
      </div>*/}
    </div>
  )
}

export default About
