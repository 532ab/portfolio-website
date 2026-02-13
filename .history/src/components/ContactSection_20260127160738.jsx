import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTriger } from "gsap/ScrollTrigger"

const ContactSection = () => {

    const circleRef = useRef(null)
    const sectionRef = useRef(null)
    const initialTextRef = useRef(null)

    const finalTextRef = useRef(null)

  return (
    <section
    ref = {sectionRef}
    className="flex items-center justify-center bg-black relative"
    style = {{ oversecrollBehavior: "none"}}>

    <div
    ref = {circleRef}
    className = "w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justift-center relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100">
        <p
        ref = {initialTextRef}
        className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center text-center ">
            SCROLL DOWN
        </p>
        <div
        ref = {finalTextRef}
        className="text-center relative flex flex-col items-center justify-center opacity">
            <h1 className="text-black md:w-[10 rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5">
                More About Abhi Chaddha
            </h1>
            <p>
                
            </p>
        </div>
    </div>
    </section>
  )
}

export default ContactSection