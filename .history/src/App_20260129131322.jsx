import { useEffect, useState } from "react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import Projects from "./components/Projects"
import ContactSection from "./components/ContactSection"

export default function App() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <Header openContactForm={openContactForm} />
      <HeroSection openContactForm={openContactForm} />
      <AboutSection />
      <Projects />
      <ContactSection isOpen={contactFormOpen} onClose={closeContactForm} />
    </>
  )
}
