import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLightbulb, FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";

const  Page_02= () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Instructor",
      bio: "10+ years of experience in teaching programming",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      bio: "Former Senior Developer at Tech Giants",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Emily Rodriguez",
      role: "Curriculum Designer",
      bio: "EdTech specialist with passion for innovation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      name: "David Kim",
      role: "Student Success Coach",
      bio: "Dedicated to helping students achieve their goals",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      text: "This program transformed my career path completely. The instructors are fantastic!",
      role: "Graduate"
    },
    {
      name: "Lisa Chen",
      text: "The support and guidance I received here was invaluable. Highly recommended!",
      role: "Current Student"
    },
    {
      name: "Marcus Williams",
      text: "Best decision I ever made for my professional development.",
      role: "Alumni"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516116216624-53e697fedbea')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Empowering Future Tech Leaders
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Where Innovation Meets Education
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Statement */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Mission</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          We are dedicated to transforming passionate individuals into skilled technology professionals through innovative education and hands-on experience. Our goal is to bridge the gap between education and industry needs.
        </p>
      </motion.section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence in Education</h3>
              <p className="text-gray-600">Committed to providing top-tier learning experiences</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <FaLightbulb className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Embracing new technologies and teaching methods</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <FaHandsHelping className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">Providing continuous guidance and mentorship</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <FaChalkboardTeacher className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practical Learning</h3>
              <p className="text-gray-600">Focus on real-world applications and projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Students Say</h2>
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
          >
            <p className="text-xl text-gray-600 mb-4 italic">"{testimonials[currentTestimonial].text}"</p>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
              <p className="text-blue-600">{testimonials[currentTestimonial].role}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page_02;