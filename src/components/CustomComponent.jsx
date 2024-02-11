import { AnimatePresence, motion } from 'framer-motion'
import { MdPlayArrow } from 'react-icons/md'
//import { slideU, slideUP, slideUp } from './framer-motion/motion'
import { useEffect } from 'react'
// import { slideAnimation } from './framer-motion/motion'

/* eslint-disable react/prop-types */
const CustomComponent = ({ controls, contrls, cntrols, value, isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, type: 'ease-in', delay: 0.5 },
      })
      cntrols.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, type: 'ease-in', delay: 0.6 },
      })
      contrls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, type: 'ease-in', delay: 0.7 },
      })
    } else {
      controls.start({
        y: 0,
        opacity: 0,
        transition: { duration: 0.8, type: 'ease-in', delay: 0 },
      })
      cntrols.start({
        y: 0,
        opacity: 0,
        transition: { duration: 0.8, type: 'ease-in', delay: 0 },
      })
      contrls.start({
        y: 0,
        opacity: 0,
        transition: { duration: 0.8, type: 'ease-in', delay: 0 },
      })
    }
  }, [isVisible, controls, cntrols, contrls])

  const render = () => {
    if (value === 'astrology') {
      return (
        <div>
          <div className='text-center pb-2'>
            <span className='font-semibold text-[#ccd6f6] xs:text-[1.4rem] sm:text-[1.7rem]'>
              Frontend Development Engineer @{' '}
              <span className='text-cyan-300'>ASTROLOGY24</span>
            </span>
            <h1 className='duration py-3 text-[1.4rem]'>May 2021 - Jan 2022</h1>
          </div>
          <div className='xs:text-[1.1rem] sm:text-[1.2rem]'>
            As a software developer intern at{' '}
            <span className='text-cyan-300'>
              <a href='https://astrology24.co.in/'>Astrology24</a>
            </span>{' '}
            specializing in astrology, my role involved:
            <motion.ul className='mt-7'>
              <motion.li
                className='flex mb-5 gap-3'
                animate={controls}
                initial={{ opacity: 0, y: 100 }}
                exit={{ y: 100 }}
              >
                <span className='text-cyan-300'>
                  <MdPlayArrow />
                </span>
                <p className=''>
                  Collaborated with senior engineers and product management
                  following best practices for the full software development
                  life cycle, including coding standards, code reviews, source
                  control management, build processes, testing, and operations.
                </p>
              </motion.li>
              <motion.li
                className='flex mb-5 gap-3'
                animate={cntrols}
                initial={{ opacity: 0, y: 100 }}
                exit={{ y: 100 }}
              >
                <span className='text-cyan-300'>
                  <MdPlayArrow />
                </span>
                <p>
                  I collaborated closely with astrology experts, ensuring a
                  harmonious integration of their insights into the digital
                  realm. In this dynamic startup environment, I embraced the
                  challenges of agile development, making rapid improvements to
                  the platform&apos;s functionality.
                </p>
              </motion.li>
              <motion.li
                className='flex mb-5 gap-3'
                animate={contrls}
                initial={{ opacity: 0, y: 100 }}
                exit={{ y: 100 }}
              >
                <span className='text-cyan-300'>
                  <MdPlayArrow />
                </span>
                <p>
                  Contributed to the accuracy and reliability of the
                  astrology-based predictions, providing users with a truly
                  unique and personalized experience.
                </p>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      )
    }
    if (value === 'oaknet') {
      return (
        <div>
          <div className='text-center'>
            <span className='font-semibold text-[#ccd6f6] xs:text-[1.4rem] sm:text-[1.7rem]'>
              Full-Stack Developer @{' '}
              <span className='text-cyan-300'>OAKNET SOLUTIONS</span>
            </span>
            <h1 className='duration py-3 text-[1.4rem]'>Jan 2022 - Present</h1>
          </div>
          <div className='xs:text-[1.1rem] sm:text-[1.2rem]'>
            Being a software developer at{' '}
            <span className='text-cyan-300'>
              <a href='https://www.oaknetsolution.com/category/features/'>
                Oaknet Solutions
              </a>
            </span>{' '}
            <motion.ul className='mt-7'>
              <motion.li
                className='flex mb-5 gap-3'
                animate={controls}
                initial={{ opacity: 0, y: 100 }}
                exit={{ y: 100 }}
              >
                <span className='text-cyan-300'>
                  <MdPlayArrow />
                </span>
                <p>
                  My responsibilities spanned full-stack development, from
                  building responsive web applications to integrating social
                  media functionalities and optimizing email campaigns. I
                  contributed to the success of SEO/SEM strategies.
                </p>
              </motion.li>
              <motion.li
                className='flex mb-5 gap-3'
                animate={cntrols}
                initial={{ opacity: 0, y: 100 }}
                exit={{ y: 100 }}
              >
                <span className='text-cyan-300'>
                  <MdPlayArrow />
                </span>
                <p>
                  I collaborate closely with product designers and the marketing
                  team to bring clients&apos; visions to life.
                </p>
              </motion.li>
              <motion.li
                className='flex mb-5 gap-3'
                animate={contrls}
                initial={{ opacity: 0, y: 100 }}
                exit={{ y: 100 }}
              >
                <span className='text-cyan-300'>
                  <MdPlayArrow />
                </span>
                <p>
                  Leveraging data-driven decision-making to enhance website
                  visibility and user engagement. Collaborating closely with
                  marketing teams, I ensured that our technical solutions
                  aligned seamlessly with overarching digital marketing goals.
                </p>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      )
    }
  }
  return (
    <AnimatePresence>
      <motion.div>{render()}</motion.div>
    </AnimatePresence>
  )
}

export default CustomComponent
