import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Page_04 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Instructor",
      bio: "10+ years experience in tech education",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      bio: "Former Google engineer turned educator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Emily Rodriguez",
      role: "Curriculum Designer",
      bio: "EdTech specialist with passion for innovation",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    }
  ];

  const testimonials = [
    {
      name: "David Smith",
      text: "This platform transformed my career in tech. The instructors are amazing!",
      role: "Software Developer"
    },
    {
      name: "Lisa Wong",
      text: "Best investment in my education. Practical and engaging content.",
      role: "UX Designer"
    },
    {
      name: "James Miller",
      text: "The community and support here is unmatched. Highly recommended!",
      role: "Data Scientist"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4)`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-6 h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white max-w-3xl"
            >
              <h1 className="text-5xl font-bold mb-4">Empowering Future Innovators</h1>
              <p className="text-xl mb-8">Transforming passionate learners into tech leaders through innovative education</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Mission"
              className="rounded-lg shadow-xl"
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">We are dedicated to democratizing tech education by providing accessible, high-quality learning experiences that empower individuals to achieve their dreams in technology.</p>
              <p className="text-gray-600 text-lg">Through innovative teaching methods and industry-relevant curriculum, we bridge the gap between education and real-world application.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
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
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Students Say</h2>
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xl text-gray-600 mb-6">"{testimonials[currentTestimonial].text}"</p>
            <p className="font-bold">{testimonials[currentTestimonial].name}</p>
            <p className="text-blue-600">{testimonials[currentTestimonial].role}</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">Empowering the next generation of tech innovators through quality education.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Programs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Email: info@techedu.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer transition" />
                <FaLinkedin className="text-2xl hover:text-blue-400 cursor-pointer transition" />
                <FaGithub className="text-2xl hover:text-gray-400 cursor-pointer transition" />
                <FaInstagram className="text-2xl hover:text-pink-400 cursor-pointer transition" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 TechEdu Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page_04;