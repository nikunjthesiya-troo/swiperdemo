import cn from '@/utils'
import React from 'react'

const Button = ({ children, type, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(
        'text-theme-black py-3 lg:py-4 px-9 lg:px-10 rounded-lg font-semibold transition-all hover:scale-95',
        type === "light" ? "hover:bg-theme-yellow-dark bg-theme-light-yellow" : "bg-theme-yellow-dark hover:bg-theme-light-yellow",
        className
      )}>
      {children}
    </button>
  )
}

export default Button