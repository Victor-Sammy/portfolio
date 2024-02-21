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
                  Implemented JavaScript algorithms for calculating birth charts
                  and generating personalized horoscopes on the frontend.
                  <br />
                  Tools:{' '}
                  <span className='text-[#ccd6f6]'>React JS, MongoDB Api</span>
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
                  Along with the team we implemented a feature that displays the
                  real-time availability status of professionals for calls. This
                  could include indicators such as online/offline status,
                  current availability, or estimated wait times for
                  consultations. Providing this information helps users make
                  informed decisions about when to initiate a call.
                  <br />
                  Tools:{' '}
                  <span className='text-[#ccd6f6]'>
                    Socket.IO, MongoDB, GraphQL, React JS
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
                  Using the official Razorpay JavaScript SDK, I integrated the
                  payment gateway seamlessly into our React.js frontend. I
                  created a dedicated component or module within our application
                  to handle the payment process, allowing users to initiate
                  premium service subscriptions or one-time payments.
                  <br />
                  Tools:{' '}
                  <span className='text-[#ccd6f6]'>
                    Razorpay SDK, React JS, MongoDB
                  </span>
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
                  Performance Optimization Specialist - Ensuring fast load times
                  and smooth user experiences, especially on mobile devices.
                  <br />
                  <span>Tools: </span>
                  <span className='text-[#ccd6f6]'>
                    Chrome Developer Tools, Lighthouse, and WebPageTest{' '}
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
                  Scalability Architect - Handling increasing traffic and data
                  volumes without sacrificing performance. By implementing
                  scalable architecture patterns like microservices, serverless
                  computing, and caching strategies to accommodate business
                  growth and handle spikes in demand effectively.
                  <br />
                  <span>Tools: </span>
                  <span className='text-[#ccd6f6]'>
                    AWS Lambda, Docker, and Redis{' '}
                  </span>
                  <span>was utilized in scalability efforts.</span>
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
                  Regularly update dependencies using package managers like npm
                  or yarn and utilize tools like npm audit or Snyk to identify
                  and remediate security vulnerabilities in dependencies.
                  <br />
                  <span>Tools: </span>
                  <span className='text-[#ccd6f6]'>
                    npm audit, Snyk, or GitHub Dependabot{' '}
                  </span>
                  <span>
                    for dependency vulnerability scanning and management.
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
