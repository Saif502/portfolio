'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [counts, setCounts] = useState({ projects: 0, experience: 0, satisfaction: 0 })

  const stats = [
    { key: 'projects', target: 50, suffix: '+' },
    { key: 'experience', target: 3, suffix: '+' },
    { key: 'satisfaction', target: 100, suffix: '%' }
  ]

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat) => {
        let current = 0
        const increment = stat.target / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.target) {
            current = stat.target
            clearInterval(timer)
          }
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }))
        }, 30)
      })
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl mb-6 leading-relaxed">
                I'm a passionate developer with 3+ years of experience in creating 
                digital solutions that make a difference. I love turning complex 
                problems into simple, beautiful designs.
              </p>
              <p className="text-xl mb-12 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or enjoying a good cup of coffee.
              </p>
            </div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="text-5xl font-bold text-primary-600 mb-2"
                >
                  {counts.projects}{stats[0].suffix}
                </motion.div>
                <p className="text-gray-600 font-medium">Projects Completed</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="text-5xl font-bold text-primary-600 mb-2"
                >
                  {counts.experience}{stats[1].suffix}
                </motion.div>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  className="text-5xl font-bold text-primary-600 mb-2"
                >
                  {counts.satisfaction}{stats[2].suffix}
                </motion.div>
                <p className="text-gray-600 font-medium">Client Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
