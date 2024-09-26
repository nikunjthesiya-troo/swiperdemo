import React from 'react'
import SectionHeading from '../molecules/SectionHeading'
import { EXPLORE_COMMUNITY } from '@/constants'
import CommunityCard from '../molecules/CommunityCard'

const ExploreCommunity = () => {
  return (
    <div className='w-full bg-theme-white'>
      <div className='theme-container flex flex-col items-center gap-12 py-12'>
        <SectionHeading
          heading="Explore our Community"
          summary="Top vendors love partnering with us—hear their stories of making unforgettable events a reality"
        />

        <div className='grid lg:grid-cols-2 gap-6'>
          {
            EXPLORE_COMMUNITY.map((data, i) => (
              <div className={i===0 ? "lg:row-span-2" : ""}>
                <CommunityCard key={i} data={data} type={i === 0 ? "flexCard" : "gridCard"} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ExploreCommunity