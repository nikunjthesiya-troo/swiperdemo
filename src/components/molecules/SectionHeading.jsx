import React from 'react'
import Typography from '../atoms/Typography'

const SectionHeading = ({ heading, summary}) => {
  return (
    <div className='flex flex-col items-center gap-4 text-center'>
      <Typography as='h2'>{heading}</Typography>
      <Typography as='p'>{summary}</Typography>
    </div>
  )
}

export default SectionHeading