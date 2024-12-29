import React, { useEffect } from "react";
import { FaGraduationCap, FaCode, FaChalkboardTeacher, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import "../index.css";

const Page_03 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      name: "Piyush Choudhary",
      position: "Software Engineer at top investment bank",
      bio: "Expert in backend development, DSA, and algorithmic trading",
      image: "src/assets/Piyush.png",
      linkedin: "#"
    },
    {
      name: "Shubham Rai",
      position: "Senior software Developer",
      bio: "Full-stack developer with expertise in modern frameworks",
      image: "src/assets/shubham.png",
      linkedin: "#"
    },
   
  ];

  const services = [
    { icon: <FaGraduationCap />, title: "Structured Learning" },
    { icon: <FaCode />, title: "Hands-on Coding" },
    { icon: <FaChalkboardTeacher />, title: "Expert Mentorship" },
    { icon: <FaRocket />, title: "Career Growth" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Introduction Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            We are dedicated to transforming tech education through innovative teaching methods and practical learning experiences.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 relative inline-block">
            Our Mission
            <div className="h-1 w-full bg-blue-500 mt-2 transform origin-left scale-x-0 animate-expand"></div>
          </h2>
          <p className="text-xl text-gray-600">
            To empower individuals with cutting-edge technical skills and knowledge, preparing them for success in the ever-evolving digital landscape.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 w-full center " 
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-[20em]  overflow-hidden ">
                <img
                  src={member.image}
                  alt={member.name}
                   className="w-full object-cover object-center"
                 
                />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  > 
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills and Services */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="slide-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl w-full flex justify-center text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8">
            Ready to start your learning journey? Contact us today!
          </p>
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Contact Us
          </button>
        </div>
      </section>
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

export default Page_03;