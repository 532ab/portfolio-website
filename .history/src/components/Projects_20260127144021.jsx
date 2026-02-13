import React from 'react'
import { gsap } from 'gsap/gsap-core'
const Projects = () => 
{
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const titleLineRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(
            titleRef.current, {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out"
            }
        )
    })
  return (
    <section
    ref = {sectionRef}
    id = "horizontal-section"
    className = "relative py-20 bg-[#f6f6f6] overflow-hidden">

    
    <div className = "container mx-auto px-4 mb-16 relative z-10">
        <h2 ref = {titleRef} 
        className = "text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4">
            My Projects
        </h2>
        <div
        ref = {titleLineRef} 
        className = "w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0">

        </div>

    </div>
    </section>
  )
}

export default Projects