import { useEffect } from "react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger} from "gsap/ScrollTrigger"

import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import Projects from "./components/Projects"

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Projects />
    </>
  )
}