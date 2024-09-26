import cn from '@/utils';
import Image from 'next/image'
import React from 'react'
import Typography from '../atoms/Typography';

const Card = ({ baseClasses, index, color, title, image, size }) => {
  return (
    <div className={cn(
      'absolute left-0 transition-all duration-300 transform hover:z-30 hover:scale-105 bg-theme-white shadow-2xl cursor-pointer',
      size === 'sm' ? 'p-2 rounded-lg' : 'p-2 lg:p-4 rounded-lg md:rounded-xl lg:rounded-2xl',
      baseClasses
    )}
      style={{ left: `${index * 18}%` }}>
      <div className={cn(
        size === 'sm' ? 'w-[100px] h-[116px]' : 'w-[120px] h-[126px] sm:w-[140px] sm:h-[156px] md:w-[180px] md:h-[210px] lg:w-[160px] lg:h-[190px] xl:w-[200px] xl:h-[230px]',
        'flex items-center justify-center overflow-hidden rounded-md',
        color
      )}>
        {
          image ? (
            <Image
              src={image}
              alt={title}
              className={cn('w-full filter grayscale hover:grayscale-0 transition-all h-full object-cover')}
              width={1000}
              height={1000} 
            />
          ) : (
            <p className={cn('font-secondary text-4xl')}>+</p>
          )
        }
      </div>
      <Typography as='p' className={cn(
        'font-secondary text-center',
        size === 'sm' ? 'text-base mt-1' : 'md:text-2xl lg:text-3xl xl:text-4xl mt-2'
      )}>{title}</Typography>
    </div>
  )
}

export default Card