//import exoticPng from '../assets/benz.png'
import { useEffect, useRef, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { FaGithub } from 'react-icons/fa6'
import { FaArrowUpFromBracket } from 'react-icons/fa6'
import { IoFolder } from 'react-icons/io5'
import { motion, useAnimation } from 'framer-motion'

const Creations = () => {
  const sectionRef = useRef()
  const control = useAnimation()
  const controls = useAnimation()
  const contrls = useAnimation()
  const cntrols = useAnimation()
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
      control.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, type: 'ease-in', delay: 0.2 },
      })
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, type: 'ease-in', delay: 0.4 },
      })
      cntrols.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, type: 'ease-in', delay: 0.6 },
      })
      contrls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, type: 'ease-in', delay: 0.8 },
      })
    } else {
      control.start({
        y: 0,
        opacity: 0,
        transition: { duration: 0.8, type: 'ease-in', delay: 0 },
      })
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
  }, [isVisible, control, controls, cntrols, contrls])

  return (
    <div ref={sectionRef}>
      <h1 className='text-[#ccd6f6] font-bold xs:text-[2rem] sm:text-[2.4rem] lg:text-[3rem] mb-10'>
        / pet projects
      </h1>
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        swipeable
        transitionTime={2000}
      >
        <div className='board h-[400px] w-full bg-transparent mb-10 border-b-2 border-black rounded-b-[9%] shadow-xl shadow-gray-900 relative'>
          <div className='inner-board h-[350px] w-full'></div>
          <div className='prj-info absolute top-32 text-blue-100 font-semibold text-center w-full leading-10'>
            <h1 className='text-[2.5rem] mb-5'>myExotic cars</h1>
            <p className='text-lg'>
              A 3D display of my favorite exotic cars using three.js
            </p>
            <p className='text-lg text-cyan-300'>ReactJS, THREE.JS</p>
            <div className='w-full flex gap-5 items-center justify-center mt-5'>
              <span>
                <a
                  className='text-3xl'
                  href='https://github.com/Victor-Sammy/my-exotic-cars-3d'
                >
                  <FaGithub />
                </a>
              </span>
              <span>
                <a className='text-3xl' href='https://myexoticcars.netlify.app'>
                  <FaArrowUpFromBracket />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className='board2 h-[400px] w-full bg-transparent mb-10 border-b-2 border-black rounded-b-[9%] shadow-xl shadow-gray-900 relative'>
          <div className='inner-board2 h-[350px] w-full'></div>
          <div className='prj-info absolute top-32 text-blue-100 font-semibold text-center w-full leading-10'>
            <h1 className='text-[2.5rem] mb-5'>Snapshot</h1>
            <p className='text-lg'>
              A facial detection app to detect facial expressions and adds
              filters
            </p>
            <p className='text-lg text-cyan-300'>
              Javascript, Face-api.js, TensorFlow.js
            </p>
            <div className='w-full flex gap-5 items-center justify-center mt-5'>
              <span>
                <a
                  className='text-3xl'
                  href='https://github.com/Victor-Sammy/face-detection-filter-app'
                >
                  <FaGithub />
                </a>
              </span>
              <span>
                <a
                  className='text-3xl'
                  href='https://facedetectnfilter.netlify.app'
                >
                  <FaArrowUpFromBracket />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Carousel>
      <div className='sm:grid grid-cols-2 grid-rows-2 gap-4'>
        <div className='hover:-translate-y-3 xs:mb-3 sm:mb-0'>
          <motion.div
            animate={control}
            initial={{ opacity: 0, y: 100 }}
            exit={{ y: 100 }}
            className='bg-[#0b1f42] hover:bg-[#212e46] rounded-3xl xs:h-[400px] sm:h-[500px] px-6 py-5'
          >
            <div className='top-itmes flex items-center justify-between'>
              <span className='text-cyan-300 text-[3rem]'>
                <IoFolder />
              </span>
              <div className='flex gap-5 items-center text-blue-200 text-[2rem]'>
                <span>
                  <a href=''>
                    <FaGithub />
                  </a>
                </span>
                <span>
                  <a href=''>
                    <FaArrowUpFromBracket />
                  </a>
                </span>
              </div>
            </div>
            <h1 className='text-[1.7rem] text-blue-200 font-semibold my-8'>
              Book haven
            </h1>
            <div className='project-details text-[#8c9ec3] text-[1.2rem]'>
              <p className='leading-8 sm:mb-8 lg:mb-14'>
                A library website that contains articles, journals and books
                across all majors.
              </p>
              <p className='leading-8'>
                Node.js (Express.js), React.js, MongoDB
              </p>
            </div>
          </motion.div>
        </div>
        <div className='hover:-translate-y-3 xs:mb-3 sm:mb-0'>
          <motion.div
            animate={controls}
            initial={{ opacity: 0, y: 100 }}
            exit={{ y: 100 }}
            className='bg-[#0b1f42] hover:bg-[#212e46] hover:-translate-y-3 rounded-3xl xs:h-[400px] sm:h-[500px] px-6 py-5'
          >
            <div className='top-itmes flex items-center justify-between'>
              <span className='text-cyan-300 text-[3rem]'>
                <IoFolder />
              </span>
              <div className='flex gap-5 items-center text-blue-200 text-[2rem]'>
                <span>
                  <a href=''>
                    <FaGithub />
                  </a>
                </span>
                <span>
                  <a href=''>
                    <FaArrowUpFromBracket />
                  </a>
                </span>
              </div>
            </div>
            <h1 className='text-[1.7rem] text-blue-200 font-semibold my-8'>
              DreamChat
            </h1>
            <div className='project-details text-[#8c9ec3] text-[1.2rem]'>
              <p className='leading-8 mb-14'>
                A chat system intended at enhancing communication through end to
                end text and media messaging
              </p>
              <p className='leading-8'>
                React.js, Node.js (Express.js), Google drive cloud, MongoDB
              </p>
            </div>
          </motion.div>
        </div>
        <div className='hover:-translate-y-3 xs:mb-3 sm:mb-0'>
          <motion.div
            animate={cntrols}
            initial={{ opacity: 0, y: 100 }}
            exit={{ y: 100 }}
            className='bg-[#0b1f42] hover:bg-[#212e46] hover:-translate-y-3 rounded-3xl xs:h-[400px] sm:h-[500px] px-6 py-5'
          >
            <div className='top-itmes flex items-center justify-between'>
              <span className='text-cyan-300 text-[3rem]'>
                <IoFolder />
              </span>
              <div className='flex gap-5 items-center text-blue-200 text-[2rem]'>
                <span>
                  <a href='https://github.com/Victor-Sammy/3D-Ai-website'>
                    <FaGithub />
                  </a>
                </span>
                <span>
                  <a href='https://3d-website-ai.netlify.app'>
                    <FaArrowUpFromBracket />
                  </a>
                </span>
              </div>
            </div>
            <h1 className='text-[1.7rem] text-blue-200 font-semibold my-8'>
              Customizable 3D-AI Website
            </h1>
            <div className='project-details text-[#8c9ec3] text-[1.2rem]'>
              <p className='leading-8 mb-14'>
                A customizable 3D product model is contained in this website to
                enable users to freely manipulate the product design using
                artificial intelligence.
              </p>
              <p className='leading-8'>
                Three.js, React.js, Unsplash API, Node.js
              </p>
            </div>
          </motion.div>
        </div>
        <div className='hover:-translate-y-3'>
          <motion.div
            animate={contrls}
            initial={{ opacity: 0, y: 100 }}
            exit={{ y: 100 }}
            className='bg-[#0b1f42] hover:bg-[#212e46] hover:-translate-y-3 rounded-3xl xs:h-[400px] sm:h-[500px] px-6 py-5'
          >
            <div className='top-itmes flex items-center justify-between'>
              <span className='text-cyan-300 text-[3rem]'>
                <IoFolder />
              </span>
              <div className='flex gap-5 items-center text-blue-200 text-[2rem]'>
                <span>
                  <a href='https://github.com/Victor-Sammy/crypto-pay'>
                    <FaGithub />
                  </a>
                </span>
                <span>
                  <a href='https://cryptopaytrade.netlify.app/'>
                    <FaArrowUpFromBracket />
                  </a>
                </span>
              </div>
            </div>
            <h1 className='text-[1.7rem] 2xl:text-[1.8rem] text-blue-200 font-semibold xs:my-4 sm:my-8'>
              CryptoPay Investment Wallet
            </h1>
            <div className='project-details text-[#8c9ec3] text-[1.2rem]'>
              <p className='leading-8 mb-5'>
                An investment wallet system for cryptocurrency exchange. <br />
                Note: the architecture and algorythm does not reflect the
                functionality of the actual crypto system but is designed and
                built for the love of web3.
              </p>
              <p className='leading-10'>Firebase (firestore), React.js</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Creations
