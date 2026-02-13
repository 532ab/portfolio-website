import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion, AnimatePresence } from "framer-motion"

const ContactSection = ({isOpen, onClose}) => {
  const circleRef = useRef(null)
  const sectionRef = useRef(null)
  const finalTextRef = useRef(null)
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

          <AnimatePresence>
            {showForm && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowForm(false)}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
                />
                <motion.form
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onSubmit={handleSubmit}
                  className="fixed w-11/12 sm:w-full max-w-md bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700 z-50 max-h-[85vh] overflow-y-auto"
                >
                  <motion.div 
                    className="flex justify-between items-center mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-white text-2xl font-bold">Get in Touch</h2>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="text-gray-400 hover:text-white transition-colors text-3xl leading-none hover:scale-110"
                    >
                      ×
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
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
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4"
                  >
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
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-4"
                  >
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
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
