'use client';

import { News } from '@/types/news';
import Link from 'next/link';
import { useState } from 'react';

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
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
      href={`/news/${news.slug}`}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article className="relative overflow-hidden rounded-xl h-96 transition-all duration-300 ease-out group-hover:shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={news.featuredImage} 
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Gradient Overlay - darker at bottom */}
        <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-300 ${
          isHovered 
            ? 'from-purple-900/95 via-purple-900/70 to-purple-900/40' 
            : 'from-black/80 via-black/50 to-black/20'
        }`} />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          {/* Category & Date Badges */}
          <div className="mb-3 flex flex-wrap gap-2">
            {news.category && (
              <span className="inline-block bg-purple-500 px-3 py-1 rounded-full text-xs font-bold uppercase">
                {news.category}
              </span>
            )}
            <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
              {formatDate(news.publishedDate)}
            </span>
          </div>

          {/* Title - Always Visible */}
          <h3 className="text-2xl font-bold mb-2 leading-tight line-clamp-2">
            {news.title}
          </h3>

          {/* Author - Always Visible */}
          {news.author && (
            <p className="text-sm text-white/90 mb-3">
              By {news.author}
            </p>
          )}

          {/* Excerpt - Shows on Hover */}
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-sm text-white/95 leading-relaxed mb-4 line-clamp-3">
              {news.excerpt}
            </p>
          </div>

          {/* Read More Link - Shows on Hover */}
          <div 
            className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <span>Read Full Article</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}