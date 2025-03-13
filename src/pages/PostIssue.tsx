
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { InfoIcon, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ImageUpload from '@/components/ImageUpload';
import LocationInput from '@/components/LocationInput';
import { categories } from '@/lib/constants';

const PostIssue = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim()) {
      toast.error('Please enter a title for your issue');
      return;
    }
    
    if (!description.trim()) {
      toast.error('Please describe your issue');
      return;
    }
    
    if (!category) {
      toast.error('Please select a category');
      return;
    }
    
    if (!location.trim()) {
      toast.error('Please provide your location');
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send data to a backend service
      console.log({
        title,
        description,
        category,
        image,
        location
      });
      
      // Show success message
      toast.success(
        'Your issue has been posted! Relevant NGOs will be notified.',
        {
          description: 'You will be contacted soon by organizations that can help you.',
        }
      );
      
      // Reset form
      setTitle('');
      setDescription('');
      setCategory('');
      setImage(null);
      setLocation('');
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Post Your Issue</h1>
            <p className="text-lg text-gray-600">
              Share details about your situation so we can connect you with NGOs that can provide the right assistance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-2xl shadow-lg p-8 animate-on-scroll opacity-0 translate-y-10">
                <div className="space-y-6">
                  {/* Title Field */}
                  <div>
                    <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                      Issue Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      placeholder="E.g., Need medical assistance for my child"
                      className="input-primary"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  
                  {/* Description Field */}
                  <div>
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                      Describe Your Issue
                    </label>
                    <textarea
                      id="description"
                      placeholder="Please provide details about your situation and what kind of help you need..."
                      className="input-primary min-h-[150px] resize-y"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  
                  {/* Category Field */}
                  <div>
                    <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      className="select-primary"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="" disabled>Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Image Upload Field */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Upload an Image (Optional)
                    </label>
                    <ImageUpload onChange={setImage} />
                    <p className="text-xs text-gray-500 mt-2">
                      Uploading an image can help NGOs better understand your situation.
                    </p>
                  </div>
                  
                  {/* Location Field */}
                  <div>
                    <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                      Your Location
                    </label>
                    <LocationInput value={location} onChange={setLocation} />
                    <p className="text-xs text-gray-500 mt-2">
                      Your location helps us connect you with nearby NGOs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Disclaimer */}
              <div className="mt-6 bg-ngo-blue/5 rounded-xl p-4 flex gap-3 animate-on-scroll opacity-0 translate-y-10">
                <div className="flex-shrink-0 text-ngo-blue">
                  <InfoIcon size={20} />
                </div>
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to share your information with relevant NGOs who can help you. 
                  Your privacy is important to us, and your information will only be used for the purpose of providing assistance.
                </p>
              </div>
              
              {/* Submit Button */}
              <div className="mt-8 flex justify-center animate-on-scroll opacity-0 translate-y-10">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-w-[200px]"
                  icon={<Send size={18} />}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Your Issue'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PostIssue;
