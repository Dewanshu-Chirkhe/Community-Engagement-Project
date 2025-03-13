
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ArrowDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { categories } from '@/lib/constants';

const Index = () => {
  const featuredCategories = categories.slice(0, 6);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="space-y-6 max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Connect with NGOs that can <span className="text-ngo-blue">help you</span>
                </h1>
                <p className="text-lg text-gray-600">
                  Find the right support for your needs. We connect people facing challenges 
                  with non-governmental organizations ready to provide assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="primary" 
                    icon={<ArrowRight size={18} />}
                    onClick={() => window.location.href = '/categories'}
                  >
                    Find Help Now
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={scrollToHowItWorks}
                  >
                    How it Works
                  </Button>
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <img
                            src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`}
                            alt="User"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold">500+</span> people helped this month
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Community Help"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-xs font-medium bg-ngo-blue/80 rounded-full px-3 py-1 backdrop-blur-sm">
                    Community Support
                  </span>
                  <h3 className="text-xl font-semibold mt-2">Building stronger communities together</h3>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl bg-ngo-gray6"></div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-28">
          <div className="text-center">
            <button 
              onClick={scrollToHowItWorks}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-ngo-blue hover:shadow-xl transition-all animate-bounce"
              style={{ animationDuration: '2s' }}
            >
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white" ref={howItWorksRef}>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-gray-600 text-lg">
              Our platform makes it easy to connect with the right NGOs that can address your specific needs.
              Follow these simple steps to get started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Select a Category",
                description: "Choose from various categories like health, education, disaster relief, and more.",
                icon: "https://cdn-icons-png.flaticon.com/512/3176/3176390.png",
                delay: 0,
              },
              {
                title: "Post Your Issue",
                description: "Describe your situation, upload an image if needed, and specify your location.",
                icon: "https://cdn-icons-png.flaticon.com/512/3039/3039367.png",
                delay: 100,
              },
              {
                title: "Get Connected",
                description: "We'll notify relevant NGOs in your area who can provide the assistance you need.",
                icon: "https://cdn-icons-png.flaticon.com/512/3039/3039382.png",
                delay: 200,
              },
            ].map((step, index) => (
              <div 
                key={index}
                className="glass-card p-8 text-center animate-on-scroll opacity-0 translate-y-10"
                style={{ transitionDelay: `${step.delay}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll opacity-0 translate-y-10">
            <Link to="/categories">
              <Button variant="primary" icon={<ArrowRight size={18} />}>
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Categories We Support</h2>
            <p className="text-gray-600 text-lg">
              We connect you with specialized NGOs across various categories to address a wide range of needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={category.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all animate-on-scroll opacity-0 translate-y-10"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link 
                    to={`/categories/${category.id}`}
                    className="text-ngo-blue font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll opacity-0 translate-y-10">
            <Link to="/categories">
              <Button variant="outline">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-gray-600 text-lg">
              Hear from people who found the help they needed through our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                location: "New York",
                text: "After the flood destroyed our home, I didn't know where to turn. This platform connected me with a disaster relief NGO that provided immediate assistance and helped us rebuild.",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                category: "Disaster Relief",
              },
              {
                name: "Michael Rodriguez",
                location: "Chicago",
                text: "As a single father struggling to find affordable healthcare for my daughter, I was desperate. Thanks to this platform, I found an NGO that covered her medical expenses completely.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                category: "Health & Medical",
              },
              {
                name: "Aisha Patel",
                location: "Los Angeles",
                text: "Finding educational resources for my children seemed impossible until I discovered this platform. The education NGO they connected us with has transformed our lives.",
                image: "https://randomuser.me/api/portraits/women/66.jpg",
                category: "Education",
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-md animate-on-scroll opacity-0 translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium bg-ngo-gray6 text-gray-700 rounded-full px-3 py-1">
                    {testimonial.category}
                  </span>
                  <div className="flex text-ngo-yellow">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-ngo-blue text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between animate-on-scroll opacity-0 translate-y-10">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get the help you need?</h2>
              <p className="text-white/80 text-lg max-w-2xl">
                Whether you're facing a challenge or know someone who needs assistance, 
                our platform can connect you with the right NGOs.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link to="/categories">
                <Button 
                  variant="secondary"
                  className="bg-white text-ngo-blue hover:bg-white/90"
                >
                  Find Help Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
