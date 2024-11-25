'use client'

import React, { useRef} from 'react';
import ProductSeason from './ProductSeason';
import { LuArrowLeftSquare, LuArrowRightSquare } from 'react-icons/lu';

const FeaturedSeason = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
        const container = containerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -container.offsetWidth * 0.5 : container.offsetWidth * 0.5;
            container.scrollLeft += scrollAmount;
        }
    };

  return (
    <div className="w-full h-[300px] bg-midnight_green-500 relative">
      {/* Arrows */}
      <LuArrowLeftSquare 
        size={28} 
        className="absolute left-4 top-[50%] translate-y-[-50%] text-carolina_blue-700 cursor-pointer z-10"
        onClick={() => scroll('left')}
      />
      <LuArrowRightSquare 
        size={28} 
        className="absolute right-4 top-[50%] translate-y-[-50%] text-carolina_blue-700 cursor-pointer z-10"
        onClick={() => scroll('right')}
      />

      {/* Scrolling Content */}
      <div className="flex space-x-2 overflow-auto h-full scrollbar-hide scroll-smooth" ref={containerRef}>
        <ProductSeason />
        <ProductSeason />
        <ProductSeason />
        <ProductSeason />
        <ProductSeason />
        <ProductSeason />
        <ProductSeason />
        <ProductSeason />
      </div>
    </div>
  );
};

export default FeaturedSeason;
