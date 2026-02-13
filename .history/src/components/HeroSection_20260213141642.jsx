import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-gray-700 to-red-500 flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-6 sm:px-10 relative overflow-hidden py-10 sm:py-0">
  
  {/* Left Section */}
  <div className="z-40 xl:mb-0 mb-[20%] xl:w-1/2">
    <motion.h1 
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1.3, duration: 1.5 }}
      className="text-4xl md:text-5xl lg:text-5xl font-bold z-10 mb-6"
    >
      Creating Fast <br /> Efficient Solutions
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1.8, duration: 1.5 }}
      className="text-xl md:text-xl lg:text-2xl text-red-100 max-w-2xl"
    >
      I’m a full-stack developer passionate about building modern, responsive, and user-focused web applications. 
      I enjoy turning complex problems into simple, elegant solutions using clean code and modern technologies. 
      With a strong eye for design and performance, I aim to create digital experiences that are both functional and visually engaging.
    </motion.p>
  </div>

  {/* Right Section */}
  <div className="hidden 2xl:flex xl:flex justify-center">
    <Spline 
      className="w-full max-w-lg space-x-55" 
      scene="https://prod.spline.design/yRGFp5B9ZQkAGUBj/scene.splinecode" 
    />
  </div>

</section>

  )
}

export default HeroSection