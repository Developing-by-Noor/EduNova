import React from 'react'
import { motion } from "framer-motion"
import './Explore.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
}

const Explore = () => {
  return (
    <div className="explore-page">

      {/* HERO */}
      <section className="explore-hero">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
        >
          Welcome to Our University
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A world-class institution focused on education, innovation, research
          and student success.
        </motion.p>
      </section>

      {/* ABOUT */}
      <motion.section
        className="explore-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>About University</h2>
        <p>
          We provide modern education systems designed to build skills, creativity
          and leadership for future careers.
        </p>
      </motion.section>

      {/* DEPARTMENTS */}
      <motion.section
        className="grid-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Departments</h2>

        <div className="grid">
          {[
            "Computer Science",
            "Artificial Intelligence",
            "Business",
            "Engineering",
            "Medical Sciences",
            "Law",
            "Media Studies",
            "Architecture"
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FACILITIES */}
      <motion.section
        className="grid-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Campus Facilities</h2>

        <div className="grid">
          {[
            "Smart Classrooms",
            "Digital Library",
            "AI Labs",
            "Sports Complex",
            "Hostels",
            "Transport",
            "Medical Center",
            "Research Labs"
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card"
              whileHover={{ y: -10 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ADMISSIONS */}
      <motion.section
        className="explore-section"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Admissions</h2>
        <p>
          Admissions are open for multiple programs. Students are selected based
          on merit, tests and academic performance.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="explore-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Join Our University</h2>
        <p>
          Build your future with education, innovation and global opportunities.
        </p>
      </motion.section>

    </div>
  )
}

export default Explore