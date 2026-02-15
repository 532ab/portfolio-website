import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = ({onOpen}) => {
  const circleRef = useRef(null)
  const sectionRef = useRef(null)
  const finalTextRef = useRef(null)

  useEffect(() => {
    // Show the contact form immediately
    gsap.set(finalTextRef.current, { opacity: 1, scale: 1 })
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative min-h-screen overflow-visible py-12"
      style={{ scrollBehavior: "smooth" }}
    >
      <div
        ref={circleRef}
        className="w-full flex items-center justify-center relative"
      >
        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center justify-center gap-8 max-w-2xl px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2"
          >
            More About Abhi Chaddha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-200 text-base sm:text-lg leading-relaxed"
          >
            I'm passionate about building cool software and solving problems with code.
            In my spare time, I'm always learning new technologies, hitting the gym,
            and unwinding with video games. Let's connect if you want to chat about tech,
            collaboration opportunities, or anything else!
          </motion.p>

          <motion.button 
            onClick={() => onOpen()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-violet-500/50"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
