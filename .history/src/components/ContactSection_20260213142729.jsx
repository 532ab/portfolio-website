import { useRef, useEffect } from "react"
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
    id = "contact"
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
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
            More About Abhi Chaddha
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I’m a software engineer who enjoys building thoughtful, user-focused
            applications. I’m especially interested in full-stack development
            and exploring how emerging technologies like AI can solve real-world
            problems. I care deeply about clean code, performance, and creating
            experiences that feel intuitive and purposeful.
          </p>

          <button 
          onClick={() => onOpen()}
          className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-300 text-sm sm:text-base">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
