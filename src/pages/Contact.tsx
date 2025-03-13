
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, User, AtSign, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { teamMembers } from '@/lib/constants';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    
    if (!email.trim()) {
      toast.error('Please enter your email');
      return;
    }
    
    if (!email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    if (!message.trim()) {
      toast.error('Please enter a message');
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send this data to a backend service
      console.log({ name, email, message });
      
      // Show success message
      toast.success('Your message has been sent!', {
        description: 'We will get back to you as soon as possible.',
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  // Add animation when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="page-transition-wrapper">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-on-scroll opacity-0 translate-y-10">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ngo-blue/10 flex items-center justify-center text-ngo-blue flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-600 mt-1">hello@connectngo.org</p>
                    <p className="text-gray-600">support@connectngo.org</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ngo-blue/10 flex items-center justify-center text-ngo-blue flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Call Us</h3>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Monday-Friday, 9AM-5PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-ngo-blue/10 flex items-center justify-center text-ngo-blue flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Office Location</h3>
                    <p className="text-gray-600 mt-1">
                      123 Main Street, Suite 456<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm p-4 text-center">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-medium text-gray-900">{member.name}</h3>
                      <p className="text-ngo-blue text-sm mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-on-scroll opacity-0 translate-y-10" style={{ transitionDelay: '100ms' }}>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <User size={18} />
                      </div>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="input-primary pl-10"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <AtSign size={18} />
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="input-primary pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-500">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        id="message"
                        placeholder="How can we help you?"
                        className="input-primary pl-10 min-h-[150px] resize-y"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full"
                      icon={<Send size={18} />}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* FAQ Preview */}
              <div className="mt-10 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">How quickly will NGOs respond to my issue?</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Most NGOs respond within 24-48 hours, depending on the urgency of your issue.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900">Is this service free to use?</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Yes, our platform is completely free for individuals seeking help from NGOs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900">Can NGOs join the platform?</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Yes, we welcome NGOs to join our platform. Please contact us for more information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-6 animate-on-scroll opacity-0 translate-y-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1034522840927!2d-122.39656592357603!3d37.7911064797544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806788d7de71%3A0xd13f101903336150!2sTransamerica%20Pyramid!5e0!3m2!1sen!2sus!4v1652970897546!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
