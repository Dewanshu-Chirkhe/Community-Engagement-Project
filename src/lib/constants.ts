
import { Heart, Stethoscope, Leaf, Users, Book, Home, AlertTriangle, Music, Globe, Coffee } from "lucide-react";

export const categories = [
  {
    id: "health",
    title: "Health & Medical",
    description: "Medical assistance, healthcare access, and wellness support",
    icon: Stethoscope,
    color: "bg-ngo-red/10 text-ngo-red",
    borderColor: "border-ngo-red/20",
  },
  {
    id: "education",
    title: "Education",
    description: "Educational resources, learning support, and skill development",
    icon: Book,
    color: "bg-ngo-blue/10 text-ngo-blue",
    borderColor: "border-ngo-blue/20",
  },
  {
    id: "environment",
    title: "Environment",
    description: "Environmental conservation, sustainability, and climate action",
    icon: Leaf,
    color: "bg-ngo-green/10 text-ngo-green",
    borderColor: "border-ngo-green/20",
  },
  {
    id: "disaster",
    title: "Disaster Relief",
    description: "Emergency response, relief efforts, and disaster recovery",
    icon: AlertTriangle,
    color: "bg-ngo-orange/10 text-ngo-orange",
    borderColor: "border-ngo-orange/20",
  },
  {
    id: "community",
    title: "Community",
    description: "Community development, neighborhood support, and local initiatives",
    icon: Users,
    color: "bg-ngo-purple/10 text-ngo-purple",
    borderColor: "border-ngo-purple/20",
  },
  {
    id: "housing",
    title: "Housing & Shelter",
    description: "Housing assistance, homelessness support, and shelter services",
    icon: Home,
    color: "bg-ngo-indigo/10 text-ngo-indigo",
    borderColor: "border-ngo-indigo/20",
  },
  {
    id: "arts",
    title: "Arts & Culture",
    description: "Cultural programs, arts education, and creative expression",
    icon: Music,
    color: "bg-ngo-pink/10 text-ngo-pink",
    borderColor: "border-ngo-pink/20",
  },
  {
    id: "international",
    title: "International Aid",
    description: "Global humanitarian aid, development, and cross-border support",
    icon: Globe,
    color: "bg-ngo-teal/10 text-ngo-teal",
    borderColor: "border-ngo-teal/20",
  },
  {
    id: "social",
    title: "Social Services",
    description: "Social welfare, family support, and community services",
    icon: Heart,
    color: "bg-ngo-cyan/10 text-ngo-cyan",
    borderColor: "border-ngo-cyan/20",
  },
  {
    id: "other",
    title: "Other Causes",
    description: "Other specialized causes and support services",
    icon: Coffee,
    color: "bg-ngo-yellow/10 text-ngo-yellow",
    borderColor: "border-ngo-yellow/20",
  },
];

export const teamMembers = [
  {
    name: "Jane Smith",
    role: "Founder & CEO",
    bio: "Former humanitarian aid worker with 10+ years of experience connecting people with the resources they need.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Tech leader passionate about using technology to solve social challenges and improve lives.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop",
  },
  {
    name: "Aisha Johnson",
    role: "NGO Relations",
    bio: "Experienced in non-profit management with deep connections in the humanitarian sector.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  },
];
