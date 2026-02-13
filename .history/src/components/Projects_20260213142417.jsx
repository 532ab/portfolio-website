import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from "react"
import { FiTrendingUp, FiSearch, FiMapPin } from "react-icons/fi"
import { motion } from "framer-motion"

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const titleLineRef = useRef(null)

  const projects = [
    { 
      id: 1, 
      title: "Stock Portfolio Tracker", 
      imageSrc: "/images/stock_portfolio.png", 
      link: "https://github.com/532ab/stock-portfolio",
      icon: FiTrendingUp,
      description: "Track and manage your stock portfolio with real-time data"
    },
    { 
      id: 2, 
      title: "Query Engine", 
      imageSrc: "/images/query_engine.png", 
      link: "https://github.com/532ab/Query-Engine",
      icon: FiSearch,
      description: "Powerful search and query processing engine"
    },
    { 
      id: 3, 
      title: "CityFinder App", 
      imageSrc: "/images/city_finder.png", 
      link: "https://github.com/532ab/CityFinder",
      icon: FiMapPin,
      description: "Discover and explore cities around the world"
    },
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

    // Grid items animation
    const gridItems = gsap.utils.toArray(".project-card")
    gridItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      )
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
      className="relative py-12 md:py-20 overflow-hidden from-gray-300 to-red-400"
    >
      <div className="container mx-auto px-4 mb-12 md:mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-200 text-center mb-4"
        >
          My Projects
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon
            return (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="project-card group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/40 transition-colors">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-2xl">→</div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
