
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  imageUrl?: string;
}

const CategoryCard = ({ 
  id, 
  title, 
  description, 
  icon: Icon, 
  color, 
  borderColor,
  imageUrl 
}: CategoryCardProps) => {
  return (
    <Link 
      to={`/categories/${id}`}
      className={`category-card relative border ${borderColor} group overflow-hidden rounded-2xl hover:shadow-lg transition-all duration-300`}
    >
      {imageUrl && (
        <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="relative p-6 z-10">
        <div className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center mb-4`}>
          <Icon size={30} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-ngo-blue transition-colors">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
