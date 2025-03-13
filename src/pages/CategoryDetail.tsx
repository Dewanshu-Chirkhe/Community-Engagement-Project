
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Globe, UserRound, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { categories } from '@/lib/constants';

// Mock NGO data for each category
const mockNgos = {
  "human-rights": [
    { id: 1, name: "People's Union for Civil Liberties", location: "Delhi", phone: "+91-11-23234324", website: "https://www.pucl.org", description: "One of India's oldest and most respected human rights organizations focusing on civil liberties protection." },
    { id: 2, name: "Human Rights Law Network", location: "Mumbai", phone: "+91-22-43543534", website: "https://www.hrln.org", description: "A collective of lawyers and social activists dedicated to using the legal system to advance human rights." },
    { id: 3, name: "Commonwealth Human Rights Initiative", location: "New Delhi", phone: "+91-11-43180200", website: "https://www.humanrightsinitiative.org", description: "Works for the practical realization of human rights across Commonwealth countries." }
  ],
  "environment": [
    { id: 1, name: "Centre for Science and Environment", location: "Delhi", phone: "+91-11-29955124", website: "https://www.cseindia.org", description: "Research and advocacy organization promoting environmentally sound and equitable development." },
    { id: 2, name: "Greenpeace India", location: "Bangalore", phone: "+91-80-43544354", website: "https://www.greenpeace.org/india", description: "Campaigns for sustainable agriculture, climate change mitigation, and preserving oceans." },
    { id: 3, name: "Wildlife Trust of India", location: "Noida", phone: "+91-120-4143900", website: "https://www.wti.org.in", description: "Works to conserve wildlife and its habitat through research-based conservation action." }
  ],
  // Add mock data for the other categories as needed
};

// Function to get mock NGOs for a category or generate some if not available
const getNgosForCategory = (categoryId: string) => {
  return mockNgos[categoryId as keyof typeof mockNgos] || [
    { id: 1, name: "Sample NGO 1", location: "Delhi", phone: "+91-11-12345678", website: "https://www.sample1.org", description: "Working tirelessly to address issues in this category across India." },
    { id: 2, name: "Sample NGO 2", location: "Mumbai", phone: "+91-22-23456789", website: "https://www.sample2.org", description: "Providing support and resources to communities in need throughout the country." },
    { id: 3, name: "Sample NGO 3", location: "Bangalore", phone: "+91-80-34567890", website: "https://www.sample3.org", description: "Dedicated to improving conditions and creating sustainable solutions for all Indians." }
  ];
};

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<typeof categories[0] | null>(null);
  const [ngos, setNgos] = useState<any[]>([]);
  
  useEffect(() => {
    if (id) {
      const categoryData = categories.find(cat => cat.id === id);
      setCategory(categoryData || null);
      
      // Get NGOs for this category
      setNgos(getNgosForCategory(id));
    }
    
    // Add animation when elements enter viewport
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
  }, [id]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ngo-blue"></div>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="page-transition-wrapper">
      <Navbar />
      
      {/* Header Section */}
      <section className={`pt-32 pb-20 ${category.color.replace('text-', 'bg-').replace('/10', '/5')}`}>
        <div className="container mx-auto px-6">
          <Link 
            to="/categories"
            className="inline-flex items-center text-gray-600 hover:text-ngo-blue mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to Categories
          </Link>
          
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className={`w-20 h-20 rounded-xl ${category.color} flex items-center justify-center flex-shrink-0`}>
              <Icon size={40} strokeWidth={1.5} />
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
              <p className="text-lg text-gray-600 max-w-3xl mb-6">
                {category.description}. Our platform connects you with NGOs working in this area across India, providing essential support and resources to those in need.
              </p>
              <Link to="/post-issue">
                <Button variant="primary">
                  Post an Issue in this Category
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* NGO Listings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">NGOs Working in {category.title}</h2>
            <p className="text-gray-600 text-lg">
              The following organizations are actively working to address issues related to {category.title.toLowerCase()} in India. You can directly contact them or post your issue through our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ngos.map((ngo, index) => (
              <div 
                key={ngo.id}
                className="animate-on-scroll opacity-0 translate-y-10 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`h-3 ${category.color.replace('text-', 'bg-').replace('/10', '')}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{ngo.name}</h3>
                  <p className="text-gray-600 mb-4">{ngo.description}</p>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-2">
                      <MapPin size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{ngo.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{ngo.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Globe size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <a 
                        href={ngo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-ngo-blue hover:underline"
                      >
                        {ngo.website.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-ngo-blue font-medium hover:underline inline-flex items-center">
                      Contact directly <ArrowUpRight size={14} className="ml-1" />
                    </button>
                    
                    <Link 
                      to="/post-issue" 
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                    >
                      <div className="flex items-center gap-1">
                        <UserRound size={14} />
                        <span>Get Help</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl bg-white shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 animate-on-scroll opacity-0 translate-y-10">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need immediate assistance?</h2>
              <p className="text-gray-600">
                If you're facing an urgent situation related to {category.title.toLowerCase()}, you can post your issue directly. We'll connect you with the right NGOs in your area quickly.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link to="/post-issue">
                <Button variant="primary">
                  Post Your Issue Now
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

export default CategoryDetail;
