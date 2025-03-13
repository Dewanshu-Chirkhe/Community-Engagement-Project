
import { 
  Heart, 
  Stethoscope, 
  Leaf, 
  Users, 
  Book, 
  Home, 
  AlertTriangle, 
  Shield, 
  Globe, 
  Coffee,
  Baby,
  Building,
  Briefcase,
  Dog,
  HelpingHand,
  Mountain,
  UserCheck,
  Tractor,
  Scale
} from "lucide-react";

export const categories = [
  {
    id: "human-rights",
    title: "Human Rights",
    description: "Advocacy, legal aid, and protection of fundamental rights",
    icon: Shield,
    color: "bg-ngo-red/10 text-ngo-red",
    borderColor: "border-ngo-red/20",
    imageUrl: "https://images.unsplash.com/photo-1591189824359-a732542d29f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMHByb3Rlc3R8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "environment",
    title: "Environment",
    description: "Conservation, climate change, and sustainable practices",
    icon: Leaf,
    color: "bg-ngo-green/10 text-ngo-green",
    borderColor: "border-ngo-green/20",
    imageUrl: "https://images.unsplash.com/photo-1544535830-9df3f56fd6ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZW52aXJvbm1lbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "health",
    title: "Health & Medical",
    description: "Medical aid, awareness, and disease prevention programs",
    icon: Stethoscope,
    color: "bg-ngo-blue/10 text-ngo-blue",
    borderColor: "border-ngo-blue/20",
    imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwaGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "education",
    title: "Education",
    description: "Literacy improvement, scholarships, and school programs",
    icon: Book,
    color: "bg-ngo-yellow/10 text-ngo-yellow",
    borderColor: "border-ngo-yellow/20",
    imageUrl: "https://images.unsplash.com/photo-1519834823404-ec57a6d77e29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGluZGlhbiUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "disaster",
    title: "Disaster Relief",
    description: "Emergency aid, rehabilitation, and reconstruction",
    icon: AlertTriangle,
    color: "bg-ngo-orange/10 text-ngo-orange",
    borderColor: "border-ngo-orange/20",
    imageUrl: "https://images.unsplash.com/photo-1599059919177-1960faf686dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWElMjBmbG9vZHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "women",
    title: "Women's Rights",
    description: "Gender equality, safety, and empowerment initiatives",
    icon: Users,
    color: "bg-ngo-pink/10 text-ngo-pink",
    borderColor: "border-ngo-pink/20",
    imageUrl: "https://images.unsplash.com/photo-1633329712176-15c9d07451a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd29tZW58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "child",
    title: "Child Welfare",
    description: "Child protection, education, and nutrition programs",
    icon: Baby,
    color: "bg-ngo-purple/10 text-ngo-purple",
    borderColor: "border-ngo-purple/20",
    imageUrl: "https://images.unsplash.com/photo-1503919275948-1f118d8ecf0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMGNoaWxkcmVufGVufDB8fDB8fHww"
  },
  {
    id: "rural",
    title: "Rural Development",
    description: "Infrastructure, sanitation, and employment in villages",
    icon: Building,
    color: "bg-ngo-indigo/10 text-ngo-indigo",
    borderColor: "border-ngo-indigo/20",
    imageUrl: "https://images.unsplash.com/photo-1582470952981-94748cf2b67e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGluZGlhbiUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "livelihood",
    title: "Livelihood Support",
    description: "Skill development and employment opportunities",
    icon: Briefcase,
    color: "bg-ngo-teal/10 text-ngo-teal",
    borderColor: "border-ngo-teal/20",
    imageUrl: "https://images.unsplash.com/photo-1596312403106-2adfe23e12d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGhhbmRpY3JhZnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "animal",
    title: "Animal Welfare",
    description: "Rescue and protection of animals, preventing cruelty",
    icon: Dog,
    color: "bg-ngo-cyan/10 text-ngo-cyan",
    borderColor: "border-ngo-cyan/20",
    imageUrl: "https://images.unsplash.com/photo-1557170142-1479706fec63?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwY293fGVufDB8fDB8fHww"
  },
  {
    id: "disability",
    title: "Elderly & Disability",
    description: "Support for elderly and differently-abled individuals",
    icon: HelpingHand,
    color: "bg-ngo-blue/10 text-ngo-blue",
    borderColor: "border-ngo-blue/20",
    imageUrl: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGluZGlhbiUyMGVsZGVybHl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "tribal",
    title: "Tribal Welfare",
    description: "Rights and development for indigenous communities",
    icon: Mountain,
    color: "bg-ngo-orange/10 text-ngo-orange",
    borderColor: "border-ngo-orange/20",
    imageUrl: "https://images.unsplash.com/photo-1568302653860-ad4f4d130752?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwdHJpYmFsfGVufDB8fDB8fHww"
  },
  {
    id: "trafficking",
    title: "Anti-Human Trafficking",
    description: "Rescue and rehabilitation of trafficking victims",
    icon: UserCheck,
    color: "bg-ngo-red/10 text-ngo-red",
    borderColor: "border-ngo-red/20",
    imageUrl: "https://images.unsplash.com/photo-1525102876237-2f95c66dde25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "agriculture",
    title: "Agriculture & Farmers",
    description: "Sustainable farming and support for farmers",
    icon: Tractor,
    color: "bg-ngo-green/10 text-ngo-green",
    borderColor: "border-ngo-green/20",
    imageUrl: "https://images.unsplash.com/photo-1595456982104-14e4b077658b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww"
  },
  {
    id: "legal",
    title: "Legal Aid",
    description: "Free legal services and awareness programs",
    icon: Scale,
    color: "bg-ngo-indigo/10 text-ngo-indigo",
    borderColor: "border-ngo-indigo/20",
    imageUrl: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbGF3eWVyfGVufDB8fDB8fHww"
  }
];

export const teamMembers = [
  {
    name: "Arjun Sharma",
    role: "Founder & CEO",
    bio: "Former humanitarian aid worker with 10+ years of experience connecting people with the resources they need.",
    image: "https://images.unsplash.com/photo-1485290334039-a3c69043e517?w=500&h=500&fit=crop",
  },
  {
    name: "Priya Patel",
    role: "Chief Operations Officer",
    bio: "Tech leader passionate about using technology to solve social challenges and improve lives.",
    image: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=500&h=500&fit=crop",
  },
  {
    name: "Aisha Khan",
    role: "NGO Relations",
    bio: "Experienced in non-profit management with deep connections in the humanitarian sector.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500&fit=crop",
  },
];
