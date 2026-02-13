import {useRef, useEffect} from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const AboutSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const introRef = useRef(null)

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.fromTo(
        titleRef.current,{ y: 100, opacity: 0},
        {
          y: -300,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
            toggleActions: "play none none reverse",

          }
        }
      )

      gsap.fromTo(
        introRef.current,
        { y: 100, opacity: 0, filter: "blur(10px)" 
        },
        {
          Y: -400,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          scrollTrigger : {
            trigger: sectionRef.current,
            start: "top 40%",
            toggleActions: "play none none reverse",

          }
        }
      )
    })

  return (
    <section ref = {sectionRef} className = "h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]">
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <h1 
          ref = {titleRef}
          className = "text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity:0">
            About Me
          </h1>
          </div>

          <div ref = { introRef }
          classname = "absolute lg:bottom - [-20rem] md:bottom - [-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0">
            <h3 className = "text-sm md:text-2xl font-bold text-pruple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt -[-40rem] mt-[-32rem]">
              I’m a Computer Science student at Indiana University with experience in full-stack development (React, Node.js, MongoDB), 
              systems programming in C, and iOS development with SwiftUI. 
              I enjoy building secure, efficient applications and solving complex technical problems with clean, scalable solutions.
            </h3>
          </div>
    </section>
  )
}

export default AboutSection