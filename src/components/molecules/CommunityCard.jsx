import cn from '@/utils'
import React from 'react'
import Button from '../atoms/Button'
import Image from 'next/image'
import Typography from '../atoms/Typography'

const CommunityCard = ({ data, type }) => {
  return (
    <div className={cn(
      'bg-theme-black/[0.02] rounded-xl w-full h-full cursor-pointer group/communityCard border border-transparent hover:border-theme-light-yellow',
      type === "flexCard" ? "flex flex-col-reverse items-center" : "flex flex-col-reverse md:grid grid-cols-2"
    )}>
      <div className={cn(
        'p-4 flex flex-col items-start h-full gap-5',
        type === "flexCard" ? "justify-self-end" : "justify-between"
      )}>
        <div className={cn(
          'flex flex-col items-start gap-4',
          type === "flexCard" ? "h-full justify-end" : ""
        )}>
          <Typography as='h3'>{data?.title}</Typography>
          <Typography as='p' className='text-theme-dark-gray'>{data?.description}</Typography>
        </div>
        <Button type="light" className="group-hover/communityCard:bg-theme-yellow-dark group-hover/communityCard:scale-95 w-full md:w-auto text-sm md:text-base">{data?.buttonText}</Button>
      </div>
      <div className='flex items-center justify-center w-full h-full p-4'>
        <Image src={data?.imgUrl} alt={data?.title} width={400} height={400} className={cn(
          'object-contain object-center group-hover/communityCard:scale-105 transition-all',
          type === "gridCard" ? "max-w-[230px]" : "max-w-full"
        )} />
      </div>
    </div>
  )
}

export default CommunityCard