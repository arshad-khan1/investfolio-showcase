
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="md:px-20 lg:px-40 section-padding bg-lightGrey">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          I'm currently seeking investment banking opportunities
        </p>
        
        <div className="mt-12 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-navy text-white">
              <h3 className="text-2xl font-display font-medium mb-6 text-gold">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="mr-4 bg-white/10 p-3 rounded-full">
                    <Mail size={24} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <a href="mailto:akshit.bakshi@example.com" className="text-white hover:text-gold">akshit.bakshi@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 bg-white/10 p-3 rounded-full">
                    <Phone size={24} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Phone</p>
                    <a href="tel:+12125551234" className="text-white hover:text-gold">+91-7972756490</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 bg-white/10 p-3 rounded-full">
                    <Linkedin size={24} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/akshit-bakshi-linkdin/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">linkedin.com/in/akshitbakshi</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-display font-medium mb-6 text-navy">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-lightGrey rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-lightGrey rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-lightGrey rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-lightGrey rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="w-full px-6 py-3 bg-navy text-white font-semibold rounded hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
