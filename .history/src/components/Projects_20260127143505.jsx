import React from 'react'

const Projects = () => 
{
    const sectionRef = useRef(null)
  return (
    <section
    ref = {sectionRef}
    id = "horizontal-section"
    className = "relative py-20 bg-[#f6f6f6] overflow-hidden">

    
    <div className = "container mx-auto px-4 mb-16 relative z-10">
        <h2 className = "text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4">
            My Projects
        </h2>

    </div>
    </section>
  )
}

export default Projects