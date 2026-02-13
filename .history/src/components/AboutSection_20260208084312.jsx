import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TypeAnimation } from 'react-type-animation';


const AboutSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const introRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

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
        if (trigger.vars.trigger === sectionRef.current)
        {
          trigger.kill()
        }
      } )
    }
  }, [])

  return (
    <section
      id = "about"
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="mt-20 text-4xl md:text-6xl font-bold mb-16 text-center text-white opacity-0"
        >
          About Me
        </h1>
      </div>

      <div
        ref={introRef}
        className="absolute top-1/2 md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between md:px-24 px-5 items-center opacity-0"
      >
        <h3 className="sm:text-lg font-bold text-purple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider mt-60 md:mt-20">
          <TypeAnimation
            sequence = {[
          'I’m a Computer Science student at Indiana University with experience in\n',
          1000,
          'full-stack development (React, Node.js, MongoDB), systems programming\n',
          1500,
          'in C, and iOS development with SwiftUI. I enjoy building secure,\n',
          2000,
          'efficient applications and solving complex technical problems with\n',
          2500,
          'clean, scalable solutions.\n',
            ]}
            speed = {50}
            wrapper="span"
            cursor = {true}
            repeat={Infinity}
          />
        </h3>
      </div>
    </section>
  )
}

export default AboutSection
