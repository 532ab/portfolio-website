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
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
        },
      })

    

    tl.to(
        circleRef.current,
        {
            scale: 5,
            backgroundColor: "#9333EA",
            ease: "power1.inOut",
            duration: 0.5,
        },
        0,
    )

    tl.to(
        initialTextRef.current,
        {
            opacity: 0,
            ease: "power1.out",
            duration: 0.2,
        },
        0.1
    )

    tl.to(
        circleRef.current,
        {
            scale: 17,
            backgroundColor: "#E9D5FF",
            boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
            ease: "power2.inOut",
            duration: 0.5,
        },
        0.5
    )

    tl.to(
        finalTextRef.current,
        {
            opacity: 1,
            ease: "power2.in",
            duration: 0.2,
        },
        0.7
    )

    return clean
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
