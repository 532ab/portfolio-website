import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = () => {
  const circleRef = useRef(null)
  const sectionRef = useRef(null)
  const initialTextRef = useRef(null)
  const finalTextRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(circleRef.current, { scale: 1 })
    gsap.set(initialTextRef.current, { opacity: 1 })
    gsap.set(finalTextRef.current, { opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    })

    tl.to(circleRef.current, {
      scale: 12,
      ease: "power2.inOut",
    })
      .to(initialTextRef.current, {
        opacity: 0,
      }, 0)
      .to(finalTextRef.current, {
        opacity: 1,
      }, "<")
  }, [])

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center bg-black relative"
      style={{ overscrollBehavior: "none" }}
    >
      <div
        ref={circleRef}
        className="w-24 h-24 rounded-full flex items-center justify-center relative bg-gradient-to-r from-violet-400 to-pink-100"
      >
        <p
          ref={initialTextRef}
          className="absolute inset-0 flex items-center justify-center text-black font-bold"
        >
          SCROLL DOWN
        </p>

        <div
          ref={finalTextRef}
          className="absolute text-center opacity-0"
        >
          <h1 className="text-black font-bold mb-4">
            More About Abhi Chaddha
          </h1>
          <button className="px-6 py-2 rounded-xl bg-black text-white">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
