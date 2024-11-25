'use client'

import useSalesStore from '@/app/stores/salesStore';
import Image from 'next/image';
import React, { useEffect } from 'react'

const FeaturedSale = () => {
    const { sales, fetchSales } = useSalesStore();
    // console.log(sales)
    useEffect(() => {
        fetchSales();
      }, [fetchSales]);
  return (
    <div className="w-full h-auto sm:h-[400px] bg-mint-300 relative">
        {sales.length > 0 ? (
        sales.map((sale) => (
          <div key={sale.id} className='w-full h-full select-none'>
            {/* <h1 className='text-3xl font-bold text-center'>{sale.title}</h1>
            <p>{sale.description}</p>
            <span className='absolute top-4 right-4 font-bold text-lg'>{`${sale.discount}% OFF`}</span> */}
            <Image 
              src={sale.mediaUrl} 
              alt={sale.title} 
              layout="intrinsic" // Automatically adjust size based on the image's intrinsic dimensions
              width={1280} // You can specify just width or height
              height={720} 
              className='w-auto h-auto'
              draggable={"false"}
            />
          </div>
        ))
      ) : (
        <p>No sales available.</p>
      )}
    </div>
  )
}

export default FeaturedSale