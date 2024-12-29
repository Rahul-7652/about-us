import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {FaLightbulb, FaHandshake, FaUsers, FaRocket } from "react-icons/fa"

const Page_01 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Instructor",
      bio: "10+ years experience in teaching programming",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      bio: "Former Silicon Valley engineer turned educator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Emma Davis",
      role: "Curriculum Designer",
      bio: "Specialized in creating engaging learning experiences",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      name: "James Wilson",
      role: "Student Success Manager",
      bio: "Dedicated to helping students achieve their goals",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
  ];

  const values = [
    { icon: <FaLightbulb />, title: "Innovation", description: "Embracing new technologies and teaching methods" },
    { icon: <FaHandshake />, title: "Excellence", description: "Committed to delivering quality education" },
    { icon: <FaUsers />, title: "Community", description: "Building strong developer networks" },
    { icon: <FaRocket />, title: "Growth", description: "Fostering continuous learning and improvement" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Empowering Future Coders</h1>
          <p className="text-xl md:text-2xl">Building tomorrow's tech leaders, today.</p>
        </motion.div>
      </motion.div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Mission</h2>
            <p className="text-gray-700 text-lg">To provide accessible, high-quality coding education that empowers individuals to transform their lives through technology.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Vision</h2>
            <p className="text-gray-700 text-lg">To create a world where anyone, anywhere can learn to code and build their dream future in tech.</p>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div ref={ref} className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl text-blue-500 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateY: 180 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Start Your Coding Journey?</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-blue-50 transition-colors"
          >
            Join Our Community
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Page_01;