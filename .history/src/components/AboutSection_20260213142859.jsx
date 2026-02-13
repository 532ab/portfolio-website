import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const introRef = useRef(null)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Create a scroll trigger that restarts the typing animation
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 40%",
      onEnter: () => {
        // Increment animationKey to restart the animation
        setAnimationKey(prev => prev + 1)
      },
    })

    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -300,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: -400,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
            <img 
              src="/IU.jpg.webp" 
              alt="IU Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent pointer-events-none"></div>
            <span className="text-gray-300 text-center px-4">Add your IU photo as<br />/public/IU.jpg.webp</span>
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2">
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            About Me
          </motion.h1>

          <motion.div
            ref={introRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-purple-200 leading-relaxed">
              <TypeAnimation
                key={animationKey}
                sequence={[
                  "I'm a Computer Science student at Indiana University with experience in full-stack development (React, Node.js, MongoDB), systems programming in C, and iOS development with SwiftUI. I enjoy building secure, efficient applications and solving complex technical problems with clean, scalable solutions."
                ]}
                speed={80}
                wrapper="span"
                cursor={true}
                repeat={0}
                style={{ whiteSpace: "pre-line" }}
              />
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
