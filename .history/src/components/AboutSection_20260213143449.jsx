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
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="py-12">
          {/* Text Content */}
          <div className="max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              About Me
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
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

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 border border-purple-500/30 rounded-xl p-4 mb-6"
            >
              <h4 className="text-lg font-bold text-purple-300 mb-2">Indiana University Bloomington</h4>
              <p className="text-purple-200 text-sm font-semibold mb-1">B.S. Computer Science • Minor in Finance & Math</p>
              <p className="text-purple-200/70 text-xs mb-2">Aug 2023 – May 2027 • GPA: 3.849/4.0</p>
              <p className="text-purple-300 text-xs">CompTIA Security+ Certified (Jan 2026)</p>
            </motion.div>

            {/* Relevant Coursework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-purple-300 mb-3">Relevant Coursework</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                {[
                  "Data Structures & Algorithms",
                  "Systems Programming (C & UNIX)",
                  "Computer Structures",
                  "Discrete Structures",
                  "Software Systems (Honors)",
                  "Secure Protocols"
                ].map((course, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-purple-700/30 border border-purple-500/50 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-purple-200 text-center hover:bg-purple-600/40 transition-colors duration-300"
                  >
                    {course}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-purple-300 mb-3">Activities & Memberships</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="bg-indigo-700/30 border border-indigo-500/50 rounded-lg px-4 py-2 flex-1">
                  <p className="text-indigo-300 font-semibold text-sm">🔒 Cybersecurity Club</p>
                  <p className="text-indigo-200/70 text-xs">2024 – Present</p>
                </div>
                <div className="bg-indigo-700/30 border border-indigo-500/50 rounded-lg px-4 py-2 flex-1">
                  <p className="text-indigo-300 font-semibold text-sm">🎾 Club Tennis</p>
                  <p className="text-indigo-200/70 text-xs">2024 – Present</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
