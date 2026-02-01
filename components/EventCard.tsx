'use client';

import { Event } from '@/types/events';
import Link from 'next/link';
import { useState } from 'react';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link 
      href={`/events/${event.slug}`}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/5] transition-all duration-300 ease-out group-hover:shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={event.mainImage} 
            alt={event.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Gradient Overlay - darker at bottom */}
        <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-300 ${
          isHovered 
            ? 'from-blue-900/95 via-blue-900/70 to-blue-900/40' 
            : 'from-black/80 via-black/50 to-black/20'
        }`} />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          {/* Date Badge */}
          <div className="mb-3">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
              {formatDate(event.eventDate)}
            </span>
          </div>

          {/* Title - Always Visible */}
          <h3 className="text-2xl font-bold mb-2 leading-tight">
            {event.title}
          </h3>

          {/* Location - Always Visible */}
          <p className="text-sm text-white/90 mb-3 flex items-center gap-1">
            <span>📍</span>
            {event.location}
          </p>

          {/* Short Description - Shows on Hover */}
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-sm text-white/95 leading-relaxed mb-4">
              {event.shortDescription}
            </p>
          </div>

          {/* View Details Link - Shows on Hover */}
          <div 
            className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <span>View Details</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}