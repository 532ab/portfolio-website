import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiCheck } from "react-icons/fi"

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }
    
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate a short delay for better UX
    setTimeout(() => {
      const subject = `Contact from ${formData.name}`
      const body = formData.message
      
      window.location.href = `mailto:abhimanyuchaddha@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      setIsSubmitted(true)
      setIsSubmitting(false)
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" })
        setIsSubmitted(false)
        onClose()
      }, 2000)
    }, 500)
  }

  const handleModalClose = () => {
    if (!isSubmitting && !isSubmitted) {
      setFormData({ name: "", email: "", message: "" })
      setErrors({})
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4 sm:p-0"
          >
            <motion.form
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onSubmit={handleSubmit}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700 z-50 max-h-[90vh] overflow-y-auto"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200 }}
                    className="mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center"
                  >
                    <FiCheck className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-300 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <>
                  <motion.div 
                    className="flex justify-between items-center mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-white text-2xl font-bold">Get in Touch</h2>
                    <button
                      type="button"
                      onClick={handleModalClose}
                      className="text-gray-400 hover:text-white transition-colors text-3xl leading-none hover:scale-110 duration-200"
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
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                        errors.name ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-gray-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4"
                  >
                    <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                        errors.email ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-gray-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-4"
                  >
                    <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-200 resize-none ${
                        errors.message ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-gray-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                      }`}
                      placeholder="Your message..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full mt-6 px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </>
              )}
            </motion.form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactModal
