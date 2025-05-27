import React from 'react';
import { Heart, MessageCircle, Eye, Bookmark,Share, Users, TrendingUp as Trending, Repeat, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../types';

const services: ServiceItem[] = [
  {
    title: 'Instagram Followers',
    description: 'Boost your follower count with high-quality, authentic-looking profiles.',
    icon: Users,
  },
  {
    title: 'Post/Reel Likes',
    description: 'Increase engagement on your posts with organic-looking likes.',
    icon: Heart,
  },
  {
    title: 'Reels Views',
    description: 'Get more exposure with increased views on your reels content.',
    icon: Trending,
  },
  {
    title: 'Comments',
    description: 'Get meaningful comments that add value to your content.',
    icon: MessageCircle,
  },
  {
    title: 'Share',
    description: 'Boost your algorithm ranking with post Shares from real accounts.',
    icon: Share,
  },
  {
    title: 'Save',
    description: 'Boost your algorithm ranking with post Save from real accounts.',
    icon: Bookmark,
  },
  {
    title: 'Story Views',
    description: 'Make your stories more popular with increased views and interactions.',
    icon: Eye,
  },
  
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            <Zap size={16} className="mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Premium Instagram Growth Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Choose from our wide range of services designed to help you grow your Instagram presence quickly and effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} hoverEffect className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                  <service.icon className="text-purple-400" size={24} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{service.description}</p>
              </CardContent>
              <CardFooter className="border-t-0 pt-0">
                <Link to="/pricing" className="w-full">
                  <Button variant="outline" fullWidth className="group">
                    Buy Now
                    <ArrowIcon className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);