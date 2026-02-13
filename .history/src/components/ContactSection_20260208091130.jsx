import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContactSection = ({isOpen, onClose}) => {
  const circleRef = useRef(null)
  const sectionRef = useRef(null)
  const finalTextRef = useRef(null)
  const [showForm, setShowForm] = useState(false)
  const [showForm, setShowForm] = useState(false)
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
      className="flex items-center justify-center bg-gradient-to-b from-black to-gray-900 relative min-h-screen overflow-visible py-12"
      style={{ scrollBehavior: "smooth" }}
    >
      <div
        ref={circleRef}
        className="w-full flex items-center justify-center relative"
      >
        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center justify-center gap-8 max-w-2xl px-4"
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            More About Abhi Chaddha
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I’m a software engineer who enjoys building thoughtful, user-focused
            applications. I’m especially interested in full-stack development
            and exploring how emerging technologies like AI can solve real-world
            problems. I care deeply about clean code, performance, and creating
            experiences that feel intuitive and purposeful.
          </p>

          <button 
          onClick={() => setShowForm(true)}
          className="px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-300 text-base">
            Contact Me
          </button>

          {showForm && (
          <form 
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all duration-300"
            >
              Send Message
            </button>
          </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
