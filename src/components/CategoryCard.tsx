
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
}

const CategoryCard = ({ id, title, description, icon: Icon, color, borderColor }: CategoryCardProps) => {
  return (
    <Link 
      to={`/categories/${id}`}
      className={`category-card border ${borderColor} group`}
    >
      <div className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <Icon size={30} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-ngo-blue transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default CategoryCard;
