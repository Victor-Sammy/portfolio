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
    if (value === 'oaknet') {
      return (
        <div>
          <div className='text-center pb-2'>
            <span className='font-semibold text-[#ccd6f6] xs:text-[1.4rem] sm:text-[1.7rem]'>
              Junior Software Enginner @{' '}
              <span className='text-cyan-300'>OAKNET SOLUTIONS</span>
            </span>
            <h1 className='duration py-3 text-[1.4rem]'>2024 - 2025</h1>
          </div>
          <div className='xs:text-[1.1rem] sm:text-[1.2rem]'>
            As a software developer intern at{' '}
            <span className='text-cyan-300'>
              <a href='https://astrology24.co.in/'>Oaknet Solutions</a>
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
                  Built user-friendly interfaces that improved user
                  satisfaction, increasing customer retention by 15% across 7+
                  platforms.
                  <br />
                  Tools:{' '}
                  <span className='text-[#ccd6f6]'>React JS, MongoDB</span>
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
                  Engineered a scalable software solution capable of supporting
                  10,000+ concurrent users with 99.9% uptime.
                  <br />
                  Tools:{' '}
                  <span className='text-[#ccd6f6]'>
                    MongoDB API, GraphQL, React JS
                  </span>
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
                  Introduced microservices architecture, improving platform
                  flexibility and reducing downtime by 25%.
                  <br />
                  Tools:{' '}
                  <span className='text-[#ccd6f6]'>
                    Chrome Developer Tools, Tailwindcss
                  </span>
                </p>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      )
    }
    if (value === 'aib') {
      return (
        <div>
          <div className='text-center'>
            <span className='font-semibold text-[#ccd6f6] xs:text-[1.4rem] sm:text-[1.7rem]'>
              Entry level Frontend Developer @{' '}
              <span className='text-cyan-300'>AIB</span>
            </span>
            <h1 className='duration py-3 text-[1.4rem]'>2023 - 2024</h1>
          </div>
          <div className='xs:text-[1.1rem] sm:text-[1.2rem]'>
            Being a Frontend Developer at{' '}
            <span className='text-cyan-300'>
              <a href='https://www.oaknetsolution.com/category/features/'>
                AIB
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
                  Optimized frontend assets, reducing page load time by 50%,
                  which improved user retention by 20%.
                  <br />
                  <span>Tools: </span>
                  <span className='text-[#ccd6f6]'>
                    Cloudinary, Lighthouse (Chrome DevTools)
                  </span>
                  <span>
                    for performance profiling, identify bottlenecks, and
                    optimize code and assets accordingly.
                  </span>
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
                  Implemented an optimized checkout flow, reducing cart
                  abandonment rates by 15% and increasing conversion rates by
                  10%.
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
                  Collaborated with backend engineers to ensure seamless API
                  integration, enabling real-time inventory updates.
                  <br />
                  <span>Tools: </span>
                  <span className='text-[#ccd6f6]'>
                    Django, Railway, PostgreSQL
                  </span>
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
