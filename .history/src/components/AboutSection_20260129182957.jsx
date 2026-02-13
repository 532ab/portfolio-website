import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const AboutSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const introRef = useRef(null)
  const starsRef = useRef([])

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

    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1
      const speed = 0.5 + Math.random()

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current)
        {
          trigger.kill()
        }
      } )
    }
  }, [])

  const addToStars = (el) => {
    if(el && !starsRef.current.includes(el))
    {
      starsRef.current.push(el)
    }
  }

  return (
    <section
      id = "about"
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >
      <div className="absolute inset-0 overflow-hidden ">
        {[...Array(10)].map((_,i) => (
          <div
          ref = { addToStars } 
          key = {`star-${i}`}
          className="absolute rounded-full"
          style = {{
            width: `${10 + i * 3}px`,
            height: `${10 + i * 3}px`,
            backgroundColor: "white",
            opacity: 0.2 + Math.random() * 0.4,
            top: `${ Math.random() * 100}%`,
            left: `${ Math.random() * 100}%`,
          }}
          />
        ))}

      </div>
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
        <h3 className="sm:text-lg font-bold text-purple-200 z-50 tracking-wider ">
          I’m a Computer Science student at Indiana University with experience in
          full-stack development (React, Node.js, MongoDB), systems programming
          in C, and iOS development with SwiftUI. I enjoy building secure,
          efficient applications and solving complex technical problems with
          clean, scalable solutions.
        </h3>
      </div>
    </section>
  )
}

export default AboutSection
