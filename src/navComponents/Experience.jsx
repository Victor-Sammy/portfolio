import { useEffect, useRef, useState } from 'react'
import CustomComponent from '../components/CustomComponent'
//import { slideAnimation } from '../components/framer-motion/motion'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'

const Experience = () => {
  const sectionRef = useRef()
  const controls = useAnimation()
  const contrls = useAnimation()
  const cntrols = useAnimation()
  const [isVisible, setIsVisible] = useState(false)
  const [value, setValue] = useState('astrology')

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

  // useEffect(() => {
  //   if (isVisible) {
  //     controls.start({
  //       y: 0,
  //       opacity: 1,
  //       transition: { duration: 1.5, type: 'ease-in' },
  //     })
  //   } else {
  //     controls.start({
  //       y: 0,
  //       opacity: 0,
  //       transition: { duration: 1.5, type: 'ease-in' },
  //     })
  //   }
  // }, [isVisible, controls])

  return (
    <AnimatePresence>
      <div className='' ref={sectionRef}>
        <h1 className='text-[#ccd6f6] font-bold xs:text-[2rem] sm:text-[2.4rem] lg:text-[3rem] mb-10'>
          / experience
        </h1>
        <div className='text-[#8892b0] xs:text-[1.1rem] sm:text-[1.4rem] lg:text-[1.6rem] 2xl:text-[1.5rem]'>
          <p className='mb-20'>
            I am thoroughly enjoying my journey as a software developer, where
            each day brings new challenges that ignites my passion for
            problem-solving. These experiences have solidified my love for
            crafting impactful solutions and reinforced my commitment to staying
            at the forefront of technological advancements.{' '}
          </p>
          <div className='flex xs:flex-col sm:flex-row items-start gap-1 w-full'>
            <div className='companies flex flex-col gap-[1%] xs:w-full sm:w-[24%]'>
              <button
                className={`${
                  value === 'astrology'
                    ? 'border-r-2 border-r-cyan-300 text-cyan-200'
                    : ''
                } flex xs:items-start sm:items-center text-[#8892b0] py-4 px-5 rounded xs:text-[1.1rem] sm:text-xl w-full`}
                onClick={() => setValue('astrology')}
              >
                ASTROLOGY24
              </button>
              <button
                className={`${
                  value === 'oaknet'
                    ? 'border-r-2 border-r-cyan-300 text-cyan-200'
                    : ''
                } flex xs:items-start sm:items-center text-[#8892b0] py-4 px-5 rounded xs:text-[1.1rem] sm:text-xl w-full`}
                onClick={() => setValue('oaknet')}
              >
                OAKNET SOLUTION
              </button>
            </div>
            {value === 'oaknet' && (
              <motion.div className='work-details xs:w-full sm:w-[72%] h-auto px-5 py-5 rounded shadow-lg shadow-gray-900'>
                <CustomComponent
                  value={value}
                  isVisible={isVisible}
                  controls={controls}
                  contrls={contrls}
                  cntrols={cntrols}
                />
              </motion.div>
            )}
            {value === 'astrology' && (
              <motion.div className='work-details xs:w-full sm:w-[72%] h-auto px-5 py-5 rounded shadow-lg shadow-gray-900'>
                <CustomComponent
                  value={value}
                  isVisible={isVisible}
                  controls={controls}
                  contrls={contrls}
                  cntrols={cntrols}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Experience
