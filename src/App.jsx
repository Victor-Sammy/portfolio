import Intro from './navComponents/Intro'
import About from './navComponents/About'
import Experience from './navComponents/Experience'
import Creations from './navComponents/Creations'
import { AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { GrMail } from 'react-icons/gr'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const creationRef = useRef(null)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  return (
    <div className='app scroll-smooth bg-[#121B32] min-h-screen xs:px-[3%] lg:px-[2%] xl:px-[10%] 2xl:px-[22%]'>
      <AnimatePresence mode='wait'>
        <div className='h-[5%] bg-[#121B32] sm:w-[94%] lg:w-[96%] xl:w-[80%] 2xl:w-[56%] flex justify-between fixed top-0 pt-[1.5%] lg:left-[2%] xl:left-[10%] 2xl:left-[22%] z-20 text-[#ccd6f6] xs:hidden sm:flex'>
          <nav className='w-[40%] font-semibold text-[1.1rem]'>
            <ul className='flex gap-[5%] justify-start'>
              <li>
                <button
                  className='text-[#ccd6f6]'
                  onClick={() => scrollToRef(homeRef)}
                >
                  Victor Samuel
                </button>
              </li>
              <li>
                <button
                  className='hover:text-[#00FFFF]'
                  onClick={() => scrollToRef(homeRef)}
                >
                  home
                </button>
              </li>
              <li>
                <button
                  className='hover:text-[#00FFFF]'
                  onClick={() => scrollToRef(aboutRef)}
                >
                  about
                </button>
              </li>
              <li>
                <button
                  className='hover:text-[#00FFFF]'
                  onClick={() => scrollToRef(experienceRef)}
                >
                  experience
                </button>
              </li>
              <li>
                <button
                  className='hover:text-[#00FFFF]'
                  onClick={() => scrollToRef(creationRef)}
                >
                  projects
                </button>
              </li>
            </ul>
          </nav>
          <nav className='w-[20%] font-semibold text-[1.3rem]'>
            <ul className='flex gap-[5%] justify-end'>
              <li>
                <a
                  className='hover:text-[#00FFFF]'
                  href='mailto:victorsammy1997@gmail.com'
                >
                  <GrMail />
                </a>
              </li>
              <li>
                <a
                  className='hover:text-[#00FFFF]'
                  href='https://github.com/Victor-Sammy'
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  className='hover:text-[#00FFFF]'
                  href='https://www.linkedin.com/in/vic-developer/'
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div ref={homeRef} className=''>
          {' '}
          <Intro />
        </div>
        <div
          ref={aboutRef}
          className='xs:mb-28 sm:mb-36 xs:-translate-y-60 sm:-translate-y-0'
        >
          {' '}
          <About />
        </div>
        <div
          ref={experienceRef}
          className='mb-36 xs:-translate-y-60 sm:-translate-y-0'
        >
          {' '}
          <Experience />
        </div>
        <div
          ref={creationRef}
          className='pb-36 xs:-translate-y-60 sm:-translate-y-0'
        >
          {' '}
          <Creations />
        </div>
      </AnimatePresence>
    </div>
  )
}

export default App
