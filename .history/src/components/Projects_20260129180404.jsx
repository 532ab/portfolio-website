import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from "react"

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const titleLineRef = useRef(null)
  const triggerRef = useRef(null)
  const horizontalRef = useRef(null)

  const images = [
    { id: 1, title: "Stock Portfolio Tracker", imageSrc: "/images/stock_portfolio.png", link: "https://github.com/532ab/stock-portfolio" },
    { id: 2, title: "Query Engine", imageSrc: "/images/query_engine.png", link: "https://github.com/532ab/Query-Engine" },
    { id: 3, title: "CityFinder App", imageSrc: "/images/city_finder.png", link: "https://github.com/532ab/CityFinder" },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    )

    // Title underline animation
    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.4,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    )

    // Section entrance
    gsap.fromTo(
      triggerRef.current,
      { y: 100, rotationX: 20, opacity: 0 },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        transformPerspective: 800,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    )

    // Background parallax
    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    )

    // Horizontal scroll
    const panels = gsap.utils.toArray(".panel")

    const horizontalScroll = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () =>
          `+=${horizontalRef.current.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    })

    // Panel animations
    panels.forEach((panel) => {
      const image = panel.querySelector(".project-image")
      const title = panel.querySelector(".project-title")

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left center",
          end: "right center",
          scrub: true,
        },
      })

      tl.fromTo(
        image,
        { scale: 0.85, rotate: -10, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, ease: "power3.out" }
      )

      if (title) {
        tl.fromTo(
          title,
          { y: 30, opacity: 0 },
          { y: -60, opacity: 1 },
          0.1
        )
      }
    })

    // Fix measurements after images load
    window.addEventListener("load", ScrollTrigger.refresh)

    return () => {
      window.removeEventListener("load", ScrollTrigger.refresh)
      ScrollTrigger.killAll()
    }
  }, [])

  return (
    <section

      ref={sectionRef}
      id="projects"
      className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4"
        >
          My Projects
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        />
      </div>

      <div ref={triggerRef} className="overflow-hidden">
        <div
          ref={horizontalRef}
          className="horizontal-section flex md:w-[200%] w-[200%]"
        >
          {images.map((project) => (
            <div
              key={project.id}
              className="panel w-screen h-screen flex items-center justify-center"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <img
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  src={project.imageSrc}
                  alt={project.title}
                />
                <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                  {project.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
