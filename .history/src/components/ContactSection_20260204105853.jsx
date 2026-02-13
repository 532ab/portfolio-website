import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = ({isOpen, onClose}) => {
  const circleRef = useRef(null)
  const sectionRef = useRef(null)
  const initialTextRef = useRef(null)
  const finalTextRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(circleRef.current, { scale: 1 })
    gsap.set(initialTextRef.current, { opacity: 1 })
    gsap.set(finalTextRef.current, { opacity: 0, scale: 0.95 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        scroll: scroll,
      },
    })

    tl.to(circleRef.current, {
      scale: 5,
      backgroundColor: "#9333EA",
      ease: "power1.inOut",
    })
      .to(
        initialTextRef.current,
        { opacity: 0, ease: "power1.out" },
        0
      )
      .to(circleRef.current, {
        scale: 17,
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
        ease: "power2.inOut",
      })
      .to(
        finalTextRef.current,
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        },
      )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <section
    id = "contact"
      ref={sectionRef}
      className="flex items-center justify-center bg-white relative min-h-screen overflow-visible"
      style={{ scrollBehavior: "smooth" }}
    >
      <div
        ref={circleRef}
        className="w-30 h-24 rounded-full flex items-center justify-center relative bg-gradient-to-r from-violet-400 to-pink-100"
      >
        <p
          ref={initialTextRef}
          className="absolute inset-0 flex items-center justify-content justify-center text-black font-bold text-nowrap"
        >
          SCROLL DOWN
        </p>

        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center justify-center"
        >
          <h1 className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5">
            More About Abhi Chaddha
          </h1>

          <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
            I’m a software engineer who enjoys building thoughtful, user-focused
            applications. I’m especially interested in full-stack development
            and exploring how emerging technologies like AI can solve real-world
            problems. I care deeply about clean code, performance, and creating
            experiences that feel intuitive and purposeful.
          </p>

          <button 
          onClick={onClose ? () => onClose() : undefined}
          className="px-6 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
