import React from 'react'
import Card from '../molecules/Card'
import { HERO_SECTION_CARDS_DATA } from '@/constants'
import { RoundedArrow } from '@/constants/vector'
import Typography from '../atoms/Typography'

const HeroSection = () => {
  return (
    <div className='w-full bg-theme-white'>
      <div className='theme-container min-h-[700px] w-full grid lg:grid-cols-3 items-center gap-4 xl:gap-14 overflow-hidden'>
        <div className='flex flex-col items-center lg:items-start gap-5 xl:gap-6 py-16 lg:py-0'>
          <Typography as='h1' className='text-center lg:text-left text-theme-black'>Nurture those
            Relationships
          </Typography>
          <Typography as='p' className='text-theme-dark-gray font-medium text-center lg:text-left'>Top vendors love partnering with us—hear their stories of making unforgettable events a reality</Typography>
          <div className='relative flex sm:flex-row flex-col-reverse items-center sm:gap-10 md:mt-4'>
            <Card
              title="Explore vendors"
              baseClasses="-rotate-6 skew-x-12 relative"
              color="bg-theme-light-yellow"
              size="sm" 
            />
            <div className='flex flex-col items-start gap-6 sm:rotate-6'>
              <Typography as='p' className='sm:text-left text-center'>Explore vendors to create <br className='sm:block hidden' /> your memory</Typography>
              <div className='sm:rotate-0 -rotate-90 w-full sm:w-auto flex sm:block justify-center'>
                <RoundedArrow/>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-2 lg:h-full flex items-center justify-center w-full lg:ml-20 bg-hero-shape bg-center bg-cover bg-no-repeat pt-10'>
          <div className='w-[80%] lg:w-full min-h-[400px] md:min-h-[500px] lg:min-h-max flex items-center justify-center relative ml-10'>
              {
                HERO_SECTION_CARDS_DATA.map((card, i) => (
                  <Card
                    key={i}
                    data={card}
                    title={card?.title}
                    image={card?.imgUrl}
                    baseClasses={card?.classes}
                    color={card?.colorClass}
                    index={i} 
                  />
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection