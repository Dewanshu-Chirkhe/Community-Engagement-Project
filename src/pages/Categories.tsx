
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/lib/constants';

const Categories = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredCategories, setFilteredCategories] = React.useState(categories);

  useEffect(() => {
    // Filtering categories based on search term
    if (searchTerm.trim() === '') {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter(category => 
        category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  }, [searchTerm]);

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
  }, [filteredCategories]);

  return (
    <div className="page-transition-wrapper">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Help By Category</h1>
            <p className="text-lg text-gray-600 mb-8">
              Browse our categories to find the right NGOs that can address your specific needs.
              Select the category that best describes your situation.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search categories..."
                className="input-primary pl-12 pr-4 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="animate-on-scroll opacity-0 translate-y-10"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ngo-gray6 flex items-center justify-center">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No categories found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any categories matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-ngo-blue font-medium hover:underline"
              >
                View all categories
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Post Issue CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl bg-white shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 animate-on-scroll opacity-0 translate-y-10">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't see the right category?</h2>
              <p className="text-gray-600">
                If you can't find a category that fits your situation, you can post your issue 
                directly and we'll help connect you with the most appropriate NGOs.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link to="/post-issue">
                <button className="btn-primary flex items-center gap-2 group">
                  Post an Issue <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Categories;
