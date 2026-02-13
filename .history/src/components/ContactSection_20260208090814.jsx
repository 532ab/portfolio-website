import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = ({isOpen, onClose}) => {
  const circleRef = useRef(null)
  const sectionRef = useRef(null)
  const finalTextRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Show the contact form immediately
    gsap.set(finalTextRef.current, { opacity: 1, scale: 1 })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = `Contact from ${formData.name}`
    const body = `Name: ${formData.name}%0DEmail: ${formData.email}%0D%0DMessage:%0D${formData.message}`
    
    window.location.href = `mailto:abhimanyuchaddha@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section
    id = "contact"
      ref={sectionRef}
      className="flex items-center justify-center bg-red-200 from-red-400 to-red-100 relative min-h-screen overflow-visible"
      style={{ scrollBehavior: "smooth" }}
    >
      <div
        ref={circleRef}
        className="w-full flex items-center justify-center relative"
      >
        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center justify-center"
        >
          <h1 className="text-black md:w-[10rem] w-[20rem] md:font-bold text-sm sm:text-base leading-none mb-5">
            More About Abhi Chaddha
          </h1>

          <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1">
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

          <form 
            onSubmit={handleSubmit}
            className= "w-full max-w-md space-y-3 absolute md:mt-20 sm:mt-14 mt-10"
          >
            <div>
              <label htmlFor="name" className="block text-black font-semibold mb-1 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white border-2 border-black rounded-lg focus:outline-none focus:border-purple-600 transition-colors text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-black font-semibold mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white border-2 border-black rounded-lg focus:outline-none focus:border-purple-600 transition-colors text-sm"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-black font-semibold mb-1 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-3 py-2 bg-white border-2 border-black rounded-lg focus:outline-none focus:border-purple-600 transition-colors resize-none text-sm"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-black text-white font-semibold hover:bg-purple-600 transition-all duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
